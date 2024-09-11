import { Kafka } from 'kafkajs';

const kafka = new Kafka({
  clientId: 'task-5',
  brokers: [process.env.KAFKA_BROKER_URL],
});
const producer = kafka.producer();
if(producer.connect()){
  console.log("connected successfully");
}
else{
  console.log("Error Occurs");
  
}
export default producer;
