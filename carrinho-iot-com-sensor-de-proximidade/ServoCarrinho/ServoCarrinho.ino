#include <Servo.h>

#define motor 10
#define ponto0 103

int distancia;
int esquerda;
int direita;
int left = 0;
int right = 0;

Servo servo;

void setup() {
  Serial.begin(9600);
  servo.attach(motor);  // ligando o servo
}

void loop() {
  desviar();
}

void desviar() {
  distancia = calcularDistancia();  // importar esse código no código de calcular distancia
  if (distancia <= 15) {
    // ele vai parar (motor release)
    // andar para trás (criar função)
    // olhar para a esquerda
    left = olharEsquerda();
    servo.write(ponto0);
    // olhar para a direita
    right = olharDireita();
    servo.write(ponto0);
    // o lado que for menor:
    //  rodar para o lado menor (precisa separar essas funções, se não vai ficar repetindo os códigos do motor)
    if (left < right) {
      // rodar para direita, dnv mandar esse código, pro código principal e criar as funções do motor lá
    } else if (left > right) {
      // rodar para esquerda
    }
  } else {
    // rodar para trás (criar função)
  }
}

int olharEsquerda() {
  servo.write(20);
  delay(800);
  esquerda = calcularDistancia();
  return esquerda;
}

int olharDireita() {
  servo.write(180);
  delay(800);
  direita = calcularDistancia();
  return direita;
}