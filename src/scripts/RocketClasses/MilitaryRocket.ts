import { RocketBase } from "./RocketBase";

export class MilitaryRocket extends  RocketBase {

    name = "TOP SECRET";

    launch():void {
        console.log("TOP SECRET");
    }
}