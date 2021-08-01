import { StartPort } from "./StartPort";
import { RocketBase } from "./RocketClasses/RocketBase";

let start = new StartPort();

let RocketArr: RocketBase[] = start.getAllRockets();

for(let i = 0; i < RocketArr.length; i++)
{
    console.log(`\nPrepare to the next launch #${i+1}`);
    RocketArr[i].launch();
}