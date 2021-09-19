//
// ....
//

struct location{
    float x;
    float y;
};

location get_position(int index);
location get_self_position();

int get_health(int index);
int get_self_health();

void hit();
void shoot();

void turn(float angle);
void turn_percent(float angle) {
    turn(angle * 3,6);
}
void turn_rad(float angle) {
    angle %= 2*Pi;
    turn(angle * 360 / 2*Pi);
}

int count_enemies(); // not a const

//
// ....
//


void play() {
    // put your code here;
    // it doesn't necessary to use the infinite loop,
    // because after exiting from this function -
    // it will continue to work from the entry point.
}
}