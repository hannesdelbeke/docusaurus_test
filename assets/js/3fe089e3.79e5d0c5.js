(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{73:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return c})),a.d(t,"metadata",(function(){return n})),a.d(t,"toc",(function(){return l})),a.d(t,"default",(function(){return b}));var o=a(3),i=a(7),r=(a(0),a(87)),c={},n={unversionedId:"06-BestPracticesCloud",id:"06-BestPracticesCloud",isDocsHomePage:!1,title:"06-BestPracticesCloud",description:"Best Practices Cloud Platforms",source:"@site/docs/06-BestPracticesCloud.md",slug:"/06-BestPracticesCloud",permalink:"/Cookbook/docs/06-BestPracticesCloud",version:"current",sidebar:"projectsSidebar",previous:{title:"05-CaseStudies",permalink:"/Cookbook/docs/05-CaseStudies"},next:{title:"07-DataSources",permalink:"/Cookbook/docs/07-DataSources"}},l=[{value:"Contents",id:"contents",children:[]},{value:"Connect",id:"connect",children:[]},{value:"Buffer",id:"buffer",children:[]},{value:"Processing",id:"processing",children:[]},{value:"Store",id:"store",children:[]},{value:"Visualize",id:"visualize",children:[]},{value:"Containerization",id:"containerization",children:[]},{value:"Best Practices",id:"best-practices",children:[]},{value:"More Details",id:"more-details",children:[]},{value:"Connect",id:"connect-1",children:[]},{value:"Buffer",id:"buffer-1",children:[]},{value:"Processing",id:"processing-1",children:[]},{value:"Store",id:"store-1",children:[]},{value:"Visualize",id:"visualize-1",children:[]},{value:"Containerization",id:"containerization-1",children:[]},{value:"Best Practices",id:"best-practices-1",children:[]},{value:"Connect",id:"connect-2",children:[]},{value:"Buffer",id:"buffer-2",children:[]},{value:"Processing",id:"processing-2",children:[]},{value:"Store",id:"store-2",children:[]},{value:"Visualize",id:"visualize-2",children:[]},{value:"Containerization",id:"containerization-2",children:[]},{value:"Best Practices",id:"best-practices-2",children:[]}],s={toc:l};function b(e){var t=e.components,a=Object(i.a)(e,["components"]);return Object(r.b)("wrapper",Object(o.a)({},s,a,{components:t,mdxType:"MDXLayout"}),Object(r.b)("h1",{id:"best-practices-cloud-platforms"},"Best Practices Cloud Platforms"),Object(r.b)("p",null,"This section is a collection of best practices on how you can arrange the tools together to a platform.",Object(r.b)("br",{parentName:"p"}),"\n","It's here especially to help you start your own project in the cloud on AWS, Azure and GCP."),Object(r.b)("p",null,"Like the advanced skills section this section also follows my ",Object(r.b)("a",{parentName:"p",href:"sections/01-Introduction.md#my-big-data-platform-blueprint"},"My Data Science Platform Blueprint"),".\nIn the blueprint I divided the platform into sections: Connect, Buffer, Processing, Store and Visualize."),Object(r.b)("p",null,"This order will help you learn how to connect the right tools together.\nTake your time and research the tools and learn how they work."),Object(r.b)("p",null,"Right now the Azure section has a lot of links to platform examples.\nThey are also useful for AWS and GCP, just try to change out the tools."),Object(r.b)("p",null,"As always, I am going to add more stuff to this over time."),Object(r.b)("p",null,"Have fun!"),Object(r.b)("h2",{id:"contents"},"Contents"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",{parentName:"li",href:"/Cookbook/docs/06-BestPracticesCloud#aws"},"Amazon Web Services (AWS)"),Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",{parentName:"li",href:"/Cookbook/docs/06-BestPracticesCloud#Connect"},"Connect")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",{parentName:"li",href:"/Cookbook/docs/06-BestPracticesCloud#Buffer"},"Buffer")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",{parentName:"li",href:"/Cookbook/docs/06-BestPracticesCloud#Processing"},"Processing")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",{parentName:"li",href:"/Cookbook/docs/06-BestPracticesCloud#Store"},"Store")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",{parentName:"li",href:"/Cookbook/docs/06-BestPracticesCloud#Visualize"},"Visualize")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",{parentName:"li",href:"/Cookbook/docs/06-BestPracticesCloud#Containerization"},"Containerization")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",{parentName:"li",href:"/Cookbook/docs/06-BestPracticesCloud#Best-Practices"},"Best Practices")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",{parentName:"li",href:"/Cookbook/docs/06-BestPracticesCloud#More-Details"},"More Details")))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",{parentName:"li",href:"/Cookbook/docs/06-BestPracticesCloud#azure"},"Microsoft Azure"),Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",{parentName:"li",href:"/Cookbook/docs/06-BestPracticesCloud#Connect-1"},"Connect")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",{parentName:"li",href:"/Cookbook/docs/06-BestPracticesCloud#Buffer-1"},"Buffer")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",{parentName:"li",href:"/Cookbook/docs/06-BestPracticesCloud#Processing-1"},"Processing")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",{parentName:"li",href:"/Cookbook/docs/06-BestPracticesCloud#Store-1"},"Store")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",{parentName:"li",href:"/Cookbook/docs/06-BestPracticesCloud#Visualize-1"},"Visualize")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",{parentName:"li",href:"/Cookbook/docs/06-BestPracticesCloud#Containerization-1"},"Containerization")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",{parentName:"li",href:"/Cookbook/docs/06-BestPracticesCloud#Best-Practices-1"},"Best Practices")))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",{parentName:"li",href:"/Cookbook/docs/06-BestPracticesCloud#gcp"},"Google Cloud Platform (GCP)"),Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",{parentName:"li",href:"/Cookbook/docs/06-BestPracticesCloud#Connect-2"},"Connect")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",{parentName:"li",href:"/Cookbook/docs/06-BestPracticesCloud#Buffer-2"},"Buffer")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",{parentName:"li",href:"/Cookbook/docs/06-BestPracticesCloud#Processing-2"},"Processing")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",{parentName:"li",href:"/Cookbook/docs/06-BestPracticesCloud#Store-2"},"Store")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",{parentName:"li",href:"/Cookbook/docs/06-BestPracticesCloud#Visualize-2"},"Visualize")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",{parentName:"li",href:"/Cookbook/docs/06-BestPracticesCloud#Containerization-2"},"Containerization")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",{parentName:"li",href:"/Cookbook/docs/06-BestPracticesCloud#Best-Practices-2"},"Best Practices"))))),Object(r.b)("h1",{id:"aws"},"AWS"),Object(r.b)("h2",{id:"connect"},"Connect"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Elastic Beanstalk (very old)"),Object(r.b)("li",{parentName:"ul"},"SES Simple Email Service"),Object(r.b)("li",{parentName:"ul"},"API Gateway")),Object(r.b)("h2",{id:"buffer"},"Buffer"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Kinesis"),Object(r.b)("li",{parentName:"ul"},"Kinesis Data Firehose"),Object(r.b)("li",{parentName:"ul"},"Managed Streaming for Kafka (MSK)"),Object(r.b)("li",{parentName:"ul"},"MQ"),Object(r.b)("li",{parentName:"ul"},"Simple Queue Service (SQS)"),Object(r.b)("li",{parentName:"ul"},"Simple Notification Service (SNS)")),Object(r.b)("h2",{id:"processing"},"Processing"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"EC2"),Object(r.b)("li",{parentName:"ul"},"Athena"),Object(r.b)("li",{parentName:"ul"},"EMR"),Object(r.b)("li",{parentName:"ul"},"Elasticsearch"),Object(r.b)("li",{parentName:"ul"},"Kinesis Data Analytics"),Object(r.b)("li",{parentName:"ul"},"Glue"),Object(r.b)("li",{parentName:"ul"},"Step Functions"),Object(r.b)("li",{parentName:"ul"},"Fargate"),Object(r.b)("li",{parentName:"ul"},"Lambda"),Object(r.b)("li",{parentName:"ul"},"SageMaker")),Object(r.b)("h2",{id:"store"},"Store"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Simple Storage Service (S3)"),Object(r.b)("li",{parentName:"ul"},"Redshift"),Object(r.b)("li",{parentName:"ul"},"Aurora"),Object(r.b)("li",{parentName:"ul"},"RDS"),Object(r.b)("li",{parentName:"ul"},"DynamoDB"),Object(r.b)("li",{parentName:"ul"},"ElastiCache"),Object(r.b)("li",{parentName:"ul"},"Neptune Graph DB"),Object(r.b)("li",{parentName:"ul"},"Timestream"),Object(r.b)("li",{parentName:"ul"},"DocumentDB (MongoDB compatible)")),Object(r.b)("h2",{id:"visualize"},"Visualize"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Quicksight")),Object(r.b)("h2",{id:"containerization"},"Containerization"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Elastic Container Service (ECS)"),Object(r.b)("li",{parentName:"ul"},"Elastic Container Registry (ECR)"),Object(r.b)("li",{parentName:"ul"},"Elastic Kubernetes Service (EKS)")),Object(r.b)("h2",{id:"best-practices"},"Best Practices"),Object(r.b)("p",null,"Deploying a Spring Boot Application on AWS Using AWS Elastic Beanstalk:"),Object(r.b)("p",null,Object(r.b)("a",{parentName:"p",href:"https://aws.amazon.com/de/blogs/devops/deploying-a-spring-boot-application-on-aws-using-aws-elastic-beanstalk/"},"https://aws.amazon.com/de/blogs/devops/deploying-a-spring-boot-application-on-aws-using-aws-elastic-beanstalk/")),Object(r.b)("p",null,"How to deploy a Docker Container on AWS:"),Object(r.b)("p",null,Object(r.b)("a",{parentName:"p",href:"https://aws.amazon.com/getting-started/hands-on/deploy-docker-containers/"},"https://aws.amazon.com/getting-started/hands-on/deploy-docker-containers/")),Object(r.b)("h2",{id:"more-details"},"More Details"),Object(r.b)("p",null,"AWS Whitepapers:"),Object(r.b)("p",null,Object(r.b)("a",{parentName:"p",href:"https://d1.awsstatic.com/whitepapers/aws-overview.pdf"},"https://d1.awsstatic.com/whitepapers/aws-overview.pdf")),Object(r.b)("h1",{id:"azure"},"Azure"),Object(r.b)("h2",{id:"connect-1"},"Connect"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Event Hub"),Object(r.b)("li",{parentName:"ul"},"IoT Hub")),Object(r.b)("h2",{id:"buffer-1"},"Buffer"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Data Factory"),Object(r.b)("li",{parentName:"ul"},"Event Hub"),Object(r.b)("li",{parentName:"ul"},"RedisCache (also Store)")),Object(r.b)("h2",{id:"processing-1"},"Processing"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Stream Analytics Service"),Object(r.b)("li",{parentName:"ul"},"Azure Databricks"),Object(r.b)("li",{parentName:"ul"},"Machine Learning"),Object(r.b)("li",{parentName:"ul"},"Azure Functions"),Object(r.b)("li",{parentName:"ul"},"Azure HDInsight (Hadoop PaaS)")),Object(r.b)("h2",{id:"store-1"},"Store"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Blob"),Object(r.b)("li",{parentName:"ul"},"CosmosDB"),Object(r.b)("li",{parentName:"ul"},"MariaDB"),Object(r.b)("li",{parentName:"ul"},"MySQL"),Object(r.b)("li",{parentName:"ul"},"PostgreSQL"),Object(r.b)("li",{parentName:"ul"},"SQL"),Object(r.b)("li",{parentName:"ul"},"Azure Data lake"),Object(r.b)("li",{parentName:"ul"},"Azure Storage (SQL Table?)"),Object(r.b)("li",{parentName:"ul"},"Azure Synapse Analytics")),Object(r.b)("h2",{id:"visualize-1"},"Visualize"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"PowerBI")),Object(r.b)("h2",{id:"containerization-1"},"Containerization"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Virtual Machines"),Object(r.b)("li",{parentName:"ul"},"Virtual Machine Scale Sets"),Object(r.b)("li",{parentName:"ul"},"Azure Container Service (AKS)"),Object(r.b)("li",{parentName:"ul"},"Container Instances"),Object(r.b)("li",{parentName:"ul"},"Azure Kubernetes Service")),Object(r.b)("h2",{id:"best-practices-1"},"Best Practices"),Object(r.b)("p",null,"Advanced Analytics Architecture:"),Object(r.b)("p",null,Object(r.b)("a",{parentName:"p",href:"https://docs.microsoft.com/en-us/azure/architecture/solution-ideas/articles/advanced-analytics-on-big-data"},"https://docs.microsoft.com/en-us/azure/architecture/solution-ideas/articles/advanced-analytics-on-big-data")),Object(r.b)("p",null,"Anomaly Detection in Real-time Data Streams:"),Object(r.b)("p",null,Object(r.b)("a",{parentName:"p",href:"https://docs.microsoft.com/en-us/azure/architecture/solution-ideas/articles/anomaly-detection-in-real-time-data-streams"},"https://docs.microsoft.com/en-us/azure/architecture/solution-ideas/articles/anomaly-detection-in-real-time-data-streams")),Object(r.b)("p",null,"Modern Data Warehouse Architecture:"),Object(r.b)("p",null,Object(r.b)("a",{parentName:"p",href:"https://docs.microsoft.com/en-us/azure/architecture/solution-ideas/articles/modern-data-warehouse"},"https://docs.microsoft.com/en-us/azure/architecture/solution-ideas/articles/modern-data-warehouse")),Object(r.b)("p",null,"CI/CD for Containers:"),Object(r.b)("p",null,Object(r.b)("a",{parentName:"p",href:"https://docs.microsoft.com/en-us/azure/architecture/solution-ideas/articles/cicd-for-containers"},"https://docs.microsoft.com/en-us/azure/architecture/solution-ideas/articles/cicd-for-containers")),Object(r.b)("p",null,"Real Time Analytics on Big Data Architecture:"),Object(r.b)("p",null,Object(r.b)("a",{parentName:"p",href:"https://docs.microsoft.com/en-us/azure/architecture/solution-ideas/articles/real-time-analytics"},"https://docs.microsoft.com/en-us/azure/architecture/solution-ideas/articles/real-time-analytics")),Object(r.b)("p",null,"Anomaly Detection in Real-time Data Streams:"),Object(r.b)("p",null,Object(r.b)("a",{parentName:"p",href:"https://docs.microsoft.com/en-us/azure/architecture/solution-ideas/articles/anomaly-detection-in-real-time-data-streams"},"https://docs.microsoft.com/en-us/azure/architecture/solution-ideas/articles/anomaly-detection-in-real-time-data-streams")),Object(r.b)("p",null,"IoT Architecture \u2013 Azure IoT Subsystems:"),Object(r.b)("p",null,Object(r.b)("a",{parentName:"p",href:"https://docs.microsoft.com/en-us/azure/architecture/solution-ideas/articles/azure-iot-subsystems"},"https://docs.microsoft.com/en-us/azure/architecture/solution-ideas/articles/azure-iot-subsystems")),Object(r.b)("p",null,"Tier Applications & Data for Analytics:"),Object(r.b)("p",null,Object(r.b)("a",{parentName:"p",href:"https://docs.microsoft.com/en-us/azure/architecture/solution-ideas/articles/tiered-data-for-analytics"},"https://docs.microsoft.com/en-us/azure/architecture/solution-ideas/articles/tiered-data-for-analytics")),Object(r.b)("p",null,"Extract, transform, and load (ETL) using HDInsight:"),Object(r.b)("p",null,Object(r.b)("a",{parentName:"p",href:"https://docs.microsoft.com/en-us/azure/architecture/solution-ideas/articles/extract-transform-and-load-using-hdinsight"},"https://docs.microsoft.com/en-us/azure/architecture/solution-ideas/articles/extract-transform-and-load-using-hdinsight")),Object(r.b)("p",null,"IoT using Cosmos DB:"),Object(r.b)("p",null,Object(r.b)("a",{parentName:"p",href:"https://docs.microsoft.com/en-us/azure/architecture/solution-ideas/articles/iot-using-cosmos-db"},"https://docs.microsoft.com/en-us/azure/architecture/solution-ideas/articles/iot-using-cosmos-db")),Object(r.b)("p",null,"Streaming using HDInsight:"),Object(r.b)("p",null,Object(r.b)("a",{parentName:"p",href:"https://docs.microsoft.com/en-us/azure/architecture/solution-ideas/articles/streaming-using-hdinsight"},"https://docs.microsoft.com/en-us/azure/architecture/solution-ideas/articles/streaming-using-hdinsight")),Object(r.b)("h1",{id:"gcp"},"GCP"),Object(r.b)("h2",{id:"connect-2"},"Connect"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Cloud IoT Core"),Object(r.b)("li",{parentName:"ul"},"App Engine"),Object(r.b)("li",{parentName:"ul"},"Cloud Dataflow")),Object(r.b)("h2",{id:"buffer-2"},"Buffer"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Pub/Sub")),Object(r.b)("h2",{id:"processing-2"},"Processing"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Compute Engine"),Object(r.b)("li",{parentName:"ul"},"Cloud Functions"),Object(r.b)("li",{parentName:"ul"},"Specialized tools:",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"Cloud Dataflow"),Object(r.b)("li",{parentName:"ul"},"Cloud Dataproc"),Object(r.b)("li",{parentName:"ul"},"Cloud Datalab"),Object(r.b)("li",{parentName:"ul"},"Cloud Dataprep"),Object(r.b)("li",{parentName:"ul"},"Cloud Composer"))),Object(r.b)("li",{parentName:"ul"},"App Engine")),Object(r.b)("h2",{id:"store-2"},"Store"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Cloud Storage"),Object(r.b)("li",{parentName:"ul"},"Cloud SQL"),Object(r.b)("li",{parentName:"ul"},"Cloud Spanner"),Object(r.b)("li",{parentName:"ul"},"Cloud Datastore"),Object(r.b)("li",{parentName:"ul"},"Cloud BigTable"),Object(r.b)("li",{parentName:"ul"},"Cloud Storage"),Object(r.b)("li",{parentName:"ul"},"Cloud Memorystore"),Object(r.b)("li",{parentName:"ul"},"BigQuery")),Object(r.b)("h2",{id:"visualize-2"},"Visualize"),Object(r.b)("h2",{id:"containerization-2"},"Containerization"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Kubernetes Engine"),Object(r.b)("li",{parentName:"ul"},"Container Security")),Object(r.b)("h2",{id:"best-practices-2"},"Best Practices"),Object(r.b)("p",null,"Thanks to Ismail Holoubi for the following GCP links"),Object(r.b)("p",null,"Best practices for migrating virtual machines to Compute Engine:"),Object(r.b)("p",null,Object(r.b)("a",{parentName:"p",href:"https://cloud.google.com/solutions/best-practices-migrating-vm-to-compute-engine"},"https://cloud.google.com/solutions/best-practices-migrating-vm-to-compute-engine")),Object(r.b)("p",null,"Best practices for Cloud Storage:"),Object(r.b)("p",null,Object(r.b)("a",{parentName:"p",href:"https://cloud.google.com/storage/docs/best-practices"},"https://cloud.google.com/storage/docs/best-practices")),Object(r.b)("p",null,"Moving a publishing workflow to BigQuery for new data insights:"),Object(r.b)("p",null,Object(r.b)("a",{parentName:"p",href:"https://cloud.google.com/blog/products/data-analytics/moving-a-publishing-workflow-to-bigquery-for-new-data-insights"},"https://cloud.google.com/blog/products/data-analytics/moving-a-publishing-workflow-to-bigquery-for-new-data-insights")),Object(r.b)("p",null,"Architecture: Optimizing large-scale ingestion of analytics events and logs:"),Object(r.b)("p",null,Object(r.b)("a",{parentName:"p",href:"https://cloud.google.com/solutions/architecture/optimized-large-scale-analytics-ingestion"},"https://cloud.google.com/solutions/architecture/optimized-large-scale-analytics-ingestion")),Object(r.b)("p",null,"Choosing the right architecture for global data distribution:"),Object(r.b)("p",null,Object(r.b)("a",{parentName:"p",href:"https://cloud.google.com/solutions/architecture/global-data-distribution"},"https://cloud.google.com/solutions/architecture/global-data-distribution")),Object(r.b)("p",null,"Best Practices for Operating Containers:"),Object(r.b)("p",null,Object(r.b)("a",{parentName:"p",href:"https://cloud.google.com/solutions/best-practices-for-operating-containers"},"https://cloud.google.com/solutions/best-practices-for-operating-containers")),Object(r.b)("p",null,"Preparing a Google Kubernetes Engine Environment for Production:"),Object(r.b)("p",null,Object(r.b)("a",{parentName:"p",href:"https://cloud.google.com/solutions/prep-kubernetes-engine-for-prod"},"https://cloud.google.com/solutions/prep-kubernetes-engine-for-prod")),Object(r.b)("p",null,"Automating IoT Machine Learning: Bridging Cloud and Device Benefits with AI Platform:"),Object(r.b)("p",null,Object(r.b)("a",{parentName:"p",href:"https://cloud.google.com/solutions/automating-iot-machine-learning"},"https://cloud.google.com/solutions/automating-iot-machine-learning")))}b.isMDXComponent=!0},87:function(e,t,a){"use strict";a.d(t,"a",(function(){return u})),a.d(t,"b",(function(){return d}));var o=a(0),i=a.n(o);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function c(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,o)}return a}function n(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?c(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):c(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,o,i=function(e,t){if(null==e)return{};var a,o,i={},r=Object.keys(e);for(o=0;o<r.length;o++)a=r[o],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)a=r[o],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var s=i.a.createContext({}),b=function(e){var t=i.a.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):n(n({},t),e)),a},u=function(e){var t=b(e.components);return i.a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},m=i.a.forwardRef((function(e,t){var a=e.components,o=e.mdxType,r=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=b(a),m=o,d=u["".concat(c,".").concat(m)]||u[m]||p[m]||r;return a?i.a.createElement(d,n(n({ref:t},s),{},{components:a})):i.a.createElement(d,n({ref:t},s))}));function d(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=a.length,c=new Array(r);c[0]=m;var n={};for(var l in t)hasOwnProperty.call(t,l)&&(n[l]=t[l]);n.originalType=e,n.mdxType="string"==typeof e?e:o,c[1]=n;for(var s=2;s<r;s++)c[s]=a[s];return i.a.createElement.apply(null,c)}return i.a.createElement.apply(null,a)}m.displayName="MDXCreateElement"}}]);