import { RocketBase } from "./RocketClasses/RocketBase";

import { SpaceXRocket } from "./RocketClasses/SpaceXRocket";    //number1
import { NasaRocket } from "./RocketClasses/NasaRocket";        //number2
import { MilitaryRocket } from "./RocketClasses/MilitaryRocket";//number3

function getRandomInt(min, max) {   //true random int
    return Math.floor(Math.random() * (max - min)) + min;
}

const rocketAmount: number = 10;

export class StartPort {
    getAllRockets(): RocketBase[] {

        let resultRocketArr: RocketBase[] = [];
        let typeNum = 0;

        for (let i = 0; i < rocketAmount; i++) {

            typeNum = getRandomInt(0, 3);
            // console.log(`typenum = ${typeNum}`);

            if (typeNum === 0) {
                resultRocketArr.push(new SpaceXRocket());
            }
            else if (typeNum === 1) {
                resultRocketArr.push(new NasaRocket());
            }
            else {
                resultRocketArr.push(new MilitaryRocket());
            }
        }

        return resultRocketArr;
    }

}