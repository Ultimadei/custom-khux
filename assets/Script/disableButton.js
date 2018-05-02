// Learn cc.Class:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/class.html
//  - [English] http://www.cocos2d-x.org/docs/creator/en/scripting/class.html
// Learn Attribute:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/reference/attributes.html
//  - [English] http://www.cocos2d-x.org/docs/creator/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/life-cycle-callbacks.html
//  - [English] http://www.cocos2d-x.org/docs/creator/en/scripting/life-cycle-callbacks.html

cc.Class({
    extends: cc.Component,

    properties: {
        startingPosition: {
            default: new cc.Vec2
        },
        targetPosition: {
            default: new cc.Vec2
        }
    },

    toggle: function() {
        if (this.node.active) {
            this.node.active = false;
        } else {
            this.node.active = true;

            this.node.x = this.startingPosition.x;
            this.node.y = this.startingPosition.y;

            cc.delayTime(1);

            cc.log("Initial X:" + this.node.x);
            cc.log("Initial Y:" + this.node.y);

            this.x += 100;
            this.y += 10;

            cc.log("Post X:" + this.node.x);
            cc.log("Post Y:" + this.node.y);

            cc.log("Target X:" + this.targetPosition.x);
            cc.log("Target Y:" + this.targetPosition.y);

            let func = function (element, count, callback) {
                cc.log(count);

                cc.log(((element.targetPosition.y - element.startingPosition.y) / 15));

                element.node.x += ((element.targetPosition.x - element.startingPosition.x) / 15);
                element.node.y += ((element.targetPosition.y - element.startingPosition.y) / 15);

                cc.log(element.node.y);

                if (count < 14) {
                    setTimeout(callback, 1, element, count + 1, callback);
                }
            }

            setTimeout(func, 1, this, 0, func);
        }
    }

    // update (dt) {},
});
