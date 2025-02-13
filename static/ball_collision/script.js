class Ball {
    constructor(stageWidth, stageHeight, radius, speed) {
        this.radius = radius;
        this.vx = speed;
        this.vy = speed;

        const diameter = this.radius * 2;

        this.x = diameter + (Math.random() * stageWidth - diameter);
        this.y = diameter + (Math.random() * stageHeight - diameter);
    }

    draw(ctx, stageWidth, stageHeight, block) {
        this.x += this.vx;
        this.y += this.vy;

        this.bounceWindow(stageWidth, stageHeight);

        this.bounceBlock(block);

        ctx.fillStyle = '#fdd700';
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
        ctx.fill();
    }

    bounceWindow(stageWidth, stageHeight) {
        const minX = this.radius;
        const maxX = stageWidth - this.radius;
        const minY = this.radius;
        const maxY = stageHeight - this.radius;

        if (this.x <= minX || this.x >= maxX) {
            this.vx *= -1;
            this.x += this.vx;
        } else if (this.y <= minY || this.y >= maxY) {
            this.vy *= -1;
            this.y += this.vy;
        }
    }

    bounceBlock(block) {
        const minX = block.x - this.radius;
        const maxX = block.maxX + this.radius;
        const minY = block.y - this.radius;
        const maxY = block.maxY + this.radius;

        if (this.x > minX && this.x < maxX && this.y > minY && this.y < maxY) {
            const x1 = Math.abs(minX - this.x);
            const x2 = Math.abs(this.x - maxX);
            const y1 = Math.abs(minY - this.y);
            const y2 = Math.abs(this.y - maxY);
            const min1 = Math.min(x1, x2);
            const min2 = Math.min(y1, y2);
            const min = Math.min(min1, min2);

            if (min == min1) {
                this.vx *= -1;
                this.x += this.vx;
            } else if (min == min2) {
                this.vy *= -1;
                this.y += this.vy;
            }
        }
    }
}

class Block {
    constructor(width, height, x, y) {
        this.width = width;
        this.height = height;
        this.x = x;
        this.y = y;
        this.maxX = width + x;
        this.maxY = height + y;
    }

    draw(ctx) {
        const xGap = 80;
        const yGap = 60;

        this.maxX = this.width + this.x;
        this.maxY = this.height + this.y;

        ctx.fillStyle = '#ff384e';
        ctx.beginPath();
        ctx.rect(this.x, this.y, this.width, this.height);
        ctx.fill();

        ctx.fillStyle = '#190f3a';
        ctx.beginPath();
        ctx.moveTo(this.maxX, this.maxY);
        ctx.lineTo(this.maxX - xGap, this.maxY + yGap);
        ctx.lineTo(this.x - xGap, this.maxY + yGap);
        ctx.lineTo(this.x, this.maxY);
        ctx.fill();

        ctx.fillStyle = '#9d0919';
        ctx.beginPath();
        ctx.moveTo(this.x, this.y);
        ctx.lineTo(this.x, this.maxY);
        ctx.lineTo(this.x - xGap, this.maxY + yGap);
        ctx.lineTo(this.x - xGap, this.maxY + yGap - this.height);
        ctx.fill();
    }
}

class App {
    constructor() {
        this.canvas = document.createElement('canvas');
        this.ctx = this.canvas.getContext('2d');

        document.body.appendChild(this.canvas);

        window.addEventListener('resize', this.resize.bind(this), false);
        window.addEventListener('keydown', this.moveBlock.bind(this), false);
        this.resize();

        this.ball = new Ball(this.stageWidth, this.stageHeight, 60, 15);
        this.block = new Block(700, 30, 300, 450);

        window.requestAnimationFrame(this.animate.bind(this));
    }

    resize() {
        this.stageWidth = document.body.clientWidth;
        this.stageHeight = document.body.clientHeight;

        this.canvas.width = this.stageWidth * 2;
        this.canvas.height = this.stageHeight * 2;

        this.ctx.scale(2, 2);
    }

    animate(t) {
        window.requestAnimationFrame(this.animate.bind(this));

        this.ctx.clearRect(0, 0, this.stageWidth, this.stageHeight);

        this.block.draw(this.ctx, this.stageWidth, this.stageHeight);

        this.ball.draw(this.ctx, this.stageWidth, this.stageHeight, this.block);
    }

    moveBlock(e) {
        if (this.block.x <= 0) {
            if(e.key == 37 || e.key == "ArrowRight") {
                this.block.x += 10
            }
            else if(e.key == 38 || e.key == "ArrowUp") {
                this.block.y -= 10
            }
            else if(e.key == 40 || e.key == "ArrowDown") {
                this.block.y += 10
            }
        }
        else if (this.block.x >= this.stageWidth) {
            if(e.key == 39 || e.key == "ArrowLeft") {
                this.block.x -= 10
            }
            else if(e.key == 38 || e.key == "ArrowUp") {
                this.block.y -= 10
            }
            else if(e.key == 40 || e.key == "ArrowDown") {
                this.block.y += 10
            }
        }
        else if (this.block.y <= 0) {
            if(e.key == 37 || e.key == "ArrowRight") {
                this.block.x += 10
            }
            else if(e.key == 39 || e.key == "ArrowLeft") {
                this.block.x -= 10
            }
            else if(e.key == 38 || e.key == "ArrowUp") {
                this.block.y -= 10
            }
        }
        else if (this.block.y >= this.stageHeight) {
            if(e.key == 37 || e.key == "ArrowRight") {
                this.block.x += 10
            }
            else if(e.key == 39 || e.key == "ArrowLeft") {
                this.block.x -= 10
            }
            else if(e.key == 40 || e.key == "ArrowDown") {
                this.block.y += 10
            }
        }
        else {
            if(e.key == 37 || e.key == "ArrowRight") {
                this.block.x += 10
            }
            else if(e.key == 39 || e.key == "ArrowLeft") {
                this.block.x -= 10
            }
            else if(e.key == 38 || e.key == "ArrowUp") {
                this.block.y -= 10
            }
            else if(e.key == 40 || e.key == "ArrowDown") {
                this.block.y += 10
            }
        }
    }
}

window.onload = () => {
    new App();
}