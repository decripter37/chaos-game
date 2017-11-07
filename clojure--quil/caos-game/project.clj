(defproject caos-game "0.1.0-SNAPSHOT"
  :description "Fractal generator with chaos game"
  :license {:name "Eclipse Public License"
            :url "http://www.eclipse.org/legal/epl-v10.html"}
  :main caos-game.core
  :jvm-opts ["-Dclojure.compiler.direct-linking=true"]
  :dependencies [[org.clojure/clojure "1.8.0"]
                [quil "2.6.0"]])
