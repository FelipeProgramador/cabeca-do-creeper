var tela = document.querySelector("canvas");
			var pincel = tela.getContext('2d');

			//cabeça do creeper 
			pincel.fillStyle = 'darkgreen';
			pincel.fillRect(0,0,350,300);
			//olho direito do creeper
			pincel.fillStyle = 'black';
			pincel.fillRect(50,60,90,90);
			// olho esquerdo do creeper
			pincel.fillStyle = 'black';
			pincel.fillRect(200,60,90,90);
			//nariz do creeper
			pincel.fillStyle = 'black';
			pincel.fillRect(135,148,70,90);
			//parte da boca lado esquerdo
			pincel.fillStyle = 'black';
			pincel.fillRect(200,190,40,110);
			//parte da boca lado direito
			pincel.fillStyle = 'black';
			pincel.fillRect(100,190,40,110);