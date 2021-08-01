import { RocketBase } from "./RocketBase";

export class MilitaryRocket extends  RocketBase {

    name = "TOP_SECRET";

    launch():void {
        console.log("TOP_SECRET");
    }
}