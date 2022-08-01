    setTimeout(() => {
        const canvas = document.getElementById('canvas');
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight + 60;
        
        const ctx = canvas.getContext('2d');
        
        document.addEventListener('resize', () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight + 60;
        });

        document.addEventListener('scroll', () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight + 60;
        })
        
        class Particle {
            constructor() {
                this.x = Math.random() * canvas.width;
                this.x2 = this.x;
                this.y = Math.random() * canvas.height;
                this.y2 = this.y;
                this.size = Math.random() * 0.6;
                this.speed = Math.random() * 10;
                this.radians = 0;
            }
            update() {
                this.radians += 0.05;
                this.x = this.x2 + Math.cos(this.radians) * this.size * this.speed;
                this.y += this.size * 2;
                
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
        
        let numberOfParticles = 50;
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