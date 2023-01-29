import { createEventBus } from "ts-event-bus";
import DrieEvents from "./DrieEvents";

const EventBus = createEventBus({
  events: DrieEvents,
});

export default EventBus;
