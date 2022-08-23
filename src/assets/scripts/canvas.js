setTimeout(() => {
    const canvas = document.getElementById('canvas');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight + 60;
    
    const ctx = canvas.getContext('2d');
    
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
}, 1);