"use strict";

const mongoose = require("mongoose");
const http = require("http");
const expressServer = require("./src/config/express");
const cluster = require("cluster");
const OS = require("os");
const { databaseUrl } = require("./src/app/Constants/database");

const PORT = process.env.PORT || 8080;

class App {
  constructor(workers, autoScale = true) {
    this.buildCluster(workers, autoScale);
  }

  database() {
    mongoose.connect(databaseUrl, {
      useCreateIndex: true,
      useNewUrlParser: true,
      useUnifiedTopology: true
    });

    mongoose.connection.on("connected", function() {
      console.log("Connected Database");
    });

    process.on("SIGINT", function() {
      mongoose.connection.close(function() {
        console.log("Close database connection");
        process.exit(0);
      });
    });

    mongoose.connection.on("error", function(error) {
      console.log("Connection Error: " + error);
    });
  }

  buildCluster(workers, autoScale) {
    if (autoScale) {
      workers = this.autoScale(workers);
    }

    if (cluster.isMaster) {
      console.log("Cluster Master Online");

      for (let i = 0; i < workers; i += 1) {
        console.log(`Creating instances ${workers}`);
        cluster.fork();
      }

      cluster.on("exit", worker => {
        console.error(`Worker ${worker.id} Offline`);
        cluster.fork();
      });
    } else {
      expressServer.listen(PORT, () => {
        this.database();
        console.log(`Server running on port ${PORT}`);
      });
    }
  }

  autoScale(workersByCpu) {
    const cpus = OS.cpus().length;
    const workers = cpus / workersByCpu;
    return workers;
  }
}

/**
 * Application Start
 *
 * @param number number of workers
 * @param boolean auto scale will use the number of workers by each CPU
 */

new App(1, false);
