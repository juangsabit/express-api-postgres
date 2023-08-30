pipeline {
    agent any

    stages {
        stage("Build") {
            steps {
                echo "------> Install node modules <------"
                sh 'git pull'
                sh 'npm install'
            }
        }
        stage("Test") {
            steps {
                echo "Hello Test"
            }
        }
        stage("Deploy") {
            steps {
                echo "------> Run application <------"
                sh 'node server.js &'
            }
        }
    }
    
    post {
        always {
            echo "I will always say Hello again!"
        }
        success {
            echo "Yay, success"
        }
        failure {
            echo "Oh no, failure"
        }
        cleanup {
            echo "Don't care success or error"
        }
    }
}