    setTimeout(() => {
        const canvas = document.getElementById('canvas');
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        
        const ctx = canvas.getContext('2d');
        
        canvas.addEventListener('resize', () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        });
        
        class Particle {
            constructor() {
                this.x = Math.random() * canvas.width;
                this.x2 = this.x;
                this.y = Math.random() * canvas.height;
                this.size = Math.random() * 0.6;
                this.speed = Math.random() * Math.cos(60);
                this.radians = 0;
            }
            update() {
                this.radians += 0.01;
                this.x += Math.random() * Math.sin(this.radians) * this.size * Math.cos(this.speed);
                this.y -= this.speed;
                
                if (this.x > canvas.width) {
                    this.x = 0;
                }
                if (this.x < 0) {
                    this.x = canvas.width;
                }
                
                if (this.y > canvas.height) {
                    this.y = 0;
                }
                if (this.y < 0) {
                    this.y = canvas.height;
                }
            }
            draw() {
                ctx.beginPath();
                ctx.fillStyle = 'white';
                ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2, true);
                ctx.fill();
                ctx.closePath();
            }
        }
        
        let numberOfParticles = 200;
        let particleArr = [];
        
        const init = (particles) => {
            for (let i = 0; i < particles; i++) {
                particleArr.push(new Particle());
            }
        };
        init(numberOfParticles);
        
        const animate = () => {
            ctx.beginPath()
            ctx.fillStyle = '#000';
            ctx.fillRect(0, 0, canvas.width, canvas.height);
            for (let i = 0; i < particleArr.length; i++) {
                particleArr[i].draw();
                particleArr[i].update();
            }
            requestAnimationFrame(animate);
        };
        animate();
    }, 1);