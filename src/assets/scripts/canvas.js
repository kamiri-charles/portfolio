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
            this.size = Math.random() * 0.5 + 0.5;
            this.x = canvas.width + this.size;
            this.y = canvas.height + this.size;
            this.speed_x = Math.random() * -0.5 -0.5;
            this.speed_y = Math.random() * -0.5 -0.5;
            this.radians = 0;
            this.radian_increment = Math.random() * 0.2 - 0.1;
            this.particle_colors = ['yellow', 'red', 'white'];
            this.color = this.particle_colors[Math.floor(Math.random() * this.particle_colors.length)];
        }
        update() {
            this.radians += this.radian_increment;
            this.x += this.speed_x + Math.sin(this.radians);
            this.y += this.speed_y + Math.cos(this.radians);
            this.speed_y += 0.001;
            
            // Boundaries
            if (this.x < 0) {
                this.x = canvas.width + this.size;
                this.y = canvas.height + this.size;
                this.speed_x = Math.random() * -2 -2;
                this.speed_y = Math.random() * -2 -2;
                this.radians = 0;
                this.radian_increment = Math.random() * 0.3 - 0.15;
            };
            
            if (this.y < 0) {
                this.x = canvas.width + this.size;
                this.y = canvas.height + this.size;
                this.speed_x = Math.random() * -2 -2;
                this.speed_y = Math.random() * -2 -2;
                this.radians = 0;
                this.radian_increment = Math.random() * 0.3 - 0.15;
            };
            
        }
        draw() {
            ctx.beginPath();
            ctx.fillStyle = this.color;
            ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2, true);
            ctx.fill();
            ctx.closePath();
        }
    }
    
    let numberOfParticles = 500;
    let particles_arr = [];
    
    const init = (num_of_particles) => {
        for (let i = 0; i < num_of_particles; i++) {
            particles_arr.push(new Particle());
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
        particles_arr.forEach(particle => particle.update());
        particles_arr.forEach(particle => particle.draw());
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
