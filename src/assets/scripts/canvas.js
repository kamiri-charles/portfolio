/* eslint-disable no-unused-vars */
let projects_load_anim;
setTimeout(() => {
    /** @type {HTMLCanvasElement} */
    const canvas = document.getElementById('canvas');
    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight + 60;
    
    document.addEventListener('resize', () => {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight + 60;
    });
    
    class Particle {
        constructor() {
            this.x = Math.random() * canvas.width;
            this.y = Math.random() * canvas.height;
            this.size = Math.random() * 20;
            this.speed = Math.random() * 5 - 2;
            this.radians = 0;
            this.radian_increment = Math.random() * 0.3 - 0.15;
            this.curve = Math.random() * 5 - 2;
        }
        update() {
            this.radians += this.radian_increment;
            this.x += this.speed;
            this.y += Math.sin(this.radians) * this.curve;
            
            // Boundaries
            if (this.x > canvas.width) {
                this.x = 0;
                this.speed = Math.random() * 5 - 2;
                this.radian_increment = Math.random() * 0.3 - 0.15;
                this.curve = Math.random() * 5 - 2;
            };
            if (this.x < 0) {
                this.x = canvas.width;
                this.speed = Math.random() * 5 - 2;
                this.radians = 0;
                this.radian_increment = Math.random() * 0.3 - 0.15;
                this.curve = Math.random() * 5 - 2;
            };
            
            if (this.y > canvas.height) {
                this.y = 0;
                this.speed = Math.random() * 5 - 2;
                this.radian_increment = Math.random() * 0.3 - 0.15;
                this.curve = Math.random() * 5 - 2;
            };
            if (this.y < 0) {
                this.y = canvas.height
                this.speed = Math.random() * 5 - 2;
                this.radians = 0;
                this.radian_increment = Math.random() * 0.3 - 0.15;
                this.curve = Math.random() * 5 - 2;
            };
            
        }
        draw() {
            ctx.beginPath();
            ctx.strokeStyle = 'blue';
            ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2, true);
            ctx.stroke();
            ctx.closePath();
        }
    }
    
    let numberOfParticles = 20;
    let particleArr = [];
    
    const init = (particles) => {
        for (let i = 0; i < particles; i++) {
            particleArr.push(new Particle());
        }
    };
    init(numberOfParticles);

    const gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
    gradient.addColorStop(0, '#7F00FF');
    gradient.addColorStop(1, '#E100FF');
    
    const animate = () => {
        ctx.beginPath()
        ctx.fillStyle = gradient;
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        for (let i = 0; i < particleArr.length; i++) {
            //particleArr[i].draw();
            //particleArr[i].update();
        }
        requestAnimationFrame(animate);
    };
    animate();
    
    
    
    /* Projects loading canvas */
    document.addEventListener('click', () => {
        const load_canvas = document.getElementById('load-canvas');
        // Check if load_canvas exists
        if (load_canvas) {
            load_canvas.width = 120;
            load_canvas.height = 120;
            const load_ctx = load_canvas.getContext('2d');
            class LoadParticle {
                constructor() {
                    this.x = load_canvas.width / 2 - 20;
                    this.y = load_canvas.height / 2 - 10;
                    this.radius = 5;
                    this.color = 'white';
                    this.radians = 0;
                }
                
                update() {
                    this.radians += 0.2;
                    this.x += Math.sin(this.radians) * 5;
                    this.y -= Math.cos(this.radians)  * 5;
                }
                
                draw() {
                    load_ctx.beginPath();
                    load_ctx.fillStyle = this.color;
                    load_ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
                    load_ctx.fill();
                }
            }
            
            const load_particle = new LoadParticle();
            const load_animate = () => {
                load_ctx.beginPath();
                load_ctx.globalAlpha = 0.6;
                load_ctx.fillStyle = 'black';
                load_ctx.fillRect(0, 0, load_canvas.width, load_canvas.height);
                load_particle.update();
                load_particle.draw();
                requestAnimationFrame(load_animate);
            }
            load_animate();
        };
    })
}, 1);
