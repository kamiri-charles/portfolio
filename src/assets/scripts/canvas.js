/* eslint-disable no-unused-vars */
let projects_load_anim;
setTimeout(() => {
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
