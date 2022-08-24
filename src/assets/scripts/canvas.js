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
            this.size = Math.random() * 0.9;
            this.speed = Math.random() * 3 - 1.5;
            this.radians = 0;
            this.radian_increment = Math.random() * 0.3 - 0.15;
            this.curve = Math.random() * 3 - 1.5;
        }
        update() {
            this.radians += this.radian_increment;
            this.x += this.speed;
            this.y += Math.sin(this.radians) * this.curve;
            
            // Boundaries
            if (this.x > canvas.width) this.x = 0;
            if (this.x < 0) this.x = canvas.width;
            
            if (this.y > canvas.height) this.y = 0;
            if (this.y < 0) this.y = canvas.height;
            
        }
        draw() {
            ctx.beginPath();
            ctx.fillStyle = 'white';
            ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2, true);
            ctx.fill();
            ctx.closePath();
        }
    }
    
    let numberOfParticles = 10;
    let particleArr = [];
    
    const init = (particles) => {
        for (let i = 0; i < particles; i++) {
            particleArr.push(new Particle());
        }
    };
    init(numberOfParticles);
    
    const animate = () => {
        ctx.beginPath()
        //ctx.fillStyle = 'rgba(0, 0, 0, 0.4)';
        ctx.fillStyle = '#000';
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        for (let i = 0; i < particleArr.length; i++) {
            particleArr[i].draw();
            particleArr[i].update();
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
                    this.x = 50;
                    this.y = 50;
                    this.radius = 4;
                    this.color = 'blueviolet';
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
                load_ctx.fillStyle = 'rgba(0, 0, 0, 0.4)';
                load_ctx.fillRect(0, 0, load_canvas.width, load_canvas.height);
                load_particle.update();
                load_particle.draw();
                requestAnimationFrame(load_animate);
            }
            load_animate();
        };
    })
}, 1);
