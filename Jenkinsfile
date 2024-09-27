pipeline {
    agent any

    tools {
        nodejs 'NodeJS'
    }

    environment {
        SONAR_PROJECT_KEY = 'test_jenkins'
        PATH = "${tool 'NodeJS'}/bin:${tool 'SonarScanner'}/bin:${env.PATH}"
    }

    stages {

        stage('SonarQube Analysis') {
            steps {
                withSonarQubeEnv('SonarQubeServer') {
                    sh """
                        sonar-scanner \
                        -Dsonar.projectKey=${SONAR_PROJECT_KEY} \
                        -Dsonar.sources=./nodejs \
                        -Dsonar.host.url=https://sonarqube.momoiot.co.kr \
                        -Dsonar.exclusions=node_modules/**,test/**
                    """
                }
            }
        }

        stage('Quality Gate') {
            steps {
                timeout(time: 1, unit: 'HOURS') {
                    waitForQualityGate abortPipeline: true
                }
            }
        }
    }

    post {
        always {
            cleanWs()
        }
    }
}
