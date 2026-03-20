#define ECHO A0
#define TRIGGER A1

void setup() {
  Serial.begin(9600);
  pinMode(ECHO, INPUT);
  pinMode(TRIGGER, OUTPUT);
}

void loop() {
  inicializarTrigger();
  int distancia = calcularDistancia();
}

int calcularDistancia() {
  long tempoViagem = pulseIn(ECHO, HIGH);
  if (tempoViagem == 0) {
    Serial.println("Erro: Nenhum eco detectado.");
    return -1;
  }
  int distancia = tempoViagem / 29 / 2;
  Serial.println(distancia);
  delay(500);
  return distancia;
}

void inicializarTrigger() {
  digitalWrite(TRIGGER, LOW);
  delayMicroseconds(4);
  digitalWrite(TRIGGER, HIGH);
  delayMicroseconds(10);
  digitalWrite(TRIGGER, LOW);
}