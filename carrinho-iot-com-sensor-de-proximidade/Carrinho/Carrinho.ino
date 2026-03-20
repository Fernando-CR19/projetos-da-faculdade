#include <Servo.h>
#include <AFMotor.h>

#define Echo A0
#define Trig A1

#define motor 10
#define ponto0 100

char byteRecebido;
int distancia;
int esquerda;
int direita;
int left = 0;
int right = 0;

Servo servo;

AF_DCMotor motor1(1);
AF_DCMotor motor2(2);
AF_DCMotor motor3(3);
AF_DCMotor motor4(4);

void setup() {
  Serial.begin(9600);

  pinMode(Trig, OUTPUT);
  pinMode(Echo, INPUT);
  servo.attach(motor);

  motor1.setSpeed(255);
  motor2.setSpeed(255);
  motor3.setSpeed(255);
  motor4.setSpeed(255);
}

void loop() {
  desviar();
  controleRemoto();
}

void controleRemoto() {
  if (Serial.available() > 0) {
    byteRecebido = Serial.read();
    Serial.println(byteRecebido);
  }

  if (byteRecebido == 'F') {
    Frente();
  }

  if (byteRecebido == 'B') {
    Re();
  }

  if (byteRecebido == 'L') {
    Esquerda();
  }

  if (byteRecebido == 'R') {
    Direita();
  }

  if (byteRecebido == 'S') {
    Parar();
  }
}

void desviar() {
  distancia = calcularDistancia();
  if (distancia <= 15) {
    Parar();
    Re();
    delay(100);
    Parar();

    left = olharEsquerda();
    servo.write(ponto0);
    delay(800);
    right = olharDireita();
    servo.write(ponto0);

    if (left < right) {
      Direita();
      delay(500);
      Parar();
      delay(200);
    } else if (left > right) {
      Esquerda();
      delay(500);
      Parar();
      delay(200);
    }

  } else {
    Frente();
  }
}

int calcularDistancia() {
  inicializarTrigger();
  long tempoViagem = pulseIn(Echo, HIGH);
  if (tempoViagem == 0) {
    Serial.println("Erro: nenhum eco detectado");
  } 
  long distancia = tempoViagem / 29 / 2; // Velocidade do som no ar = 340 metros por segundo, convertendo para centímetros por microsegundos = 0,034 cm/µs, convertendo para número inteiro: 1 cm = 29 microssegundos
  Serial.println(distancia);
  return distancia;
}

void inicializarTrigger() {
  digitalWrite(Trig, LOW);
  delayMicroseconds(4);
  digitalWrite(Trig, HIGH);
  delayMicroseconds(10);
  digitalWrite(Trig, LOW);
}

int olharDireita() {
  servo.write(20);
  delay(800);
  direita = calcularDistancia();
  return direita;
}
int olharEsquerda() {
  servo.write(180);
  delay(800);
  esqueda = calcularDistancia();
  return esquerda;
}

void Frente() {
  motor1.run(FORWARD);
  motor2.run(FORWARD);
  motor3.run(FORWARD);
  motor4.run(FORWARD);
}

void Re() {
  motor1.run(BACKWARD);
  motor2.run(BACKWARD);
  motor3.run(BACKWARD);
  motor4.run(BACKWARD);
}

void Esquerda() {
  motor1.run(FORWARD);
  motor2.run(BACKWARD);
  motor3.run(BACKWARD);
  motor4.run(FORWARD);
}

void Direita() {
  motor1.run(BACKWARD);
  motor2.run(FORWARD);
  motor3.run(FORWARD);
  motor4.run(BACKWARD);
}

void Parar() {
  motor1.run(RELEASE);
  motor2.run(RELEASE);
  motor3.run(RELEASE);
  motor4.run(RELEASE);
}