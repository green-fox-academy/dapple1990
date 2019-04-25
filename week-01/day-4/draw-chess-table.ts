let size: number = 8;

for (let row: number = 0; row < size; row++) {
    let pattern: string = '';
    for (let column: number = 0; column < size; column++) {
        if ((row + column) % 2 == 0) {
            pattern += '%';
        }
        else {
            pattern += ' ';
        }
    }
    console.log(pattern);
}