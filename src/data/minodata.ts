
const types = {
    "I": [[-1, 0], [ 0, 0], [ 1, 0], [ 2, 0]],

    "O": [         [ 0, 1], [ 1, 1], 
                   [ 0, 0], [ 1, 0]],

    "T": [         [ 0, 1], 
          [-1, 0], [ 0, 0], [ 1, 0]],

    "L": [                  [ 1, 1], 
          [-1, 0], [ 0, 0], [ 1, 0]],

    "J": [[-1, 1], 
          [-1, 0], [ 0, 0], [ 1, 0]],

    "Z": [[-1, 1], [ 0, 1], 
                   [ 0, 0], [ 1, 0]],

    "S": [         [ 0, 1], [ 1, 1], 
          [-1, 0], [ 0, 0]],
};


// SRS
const offsets = {
    I: [
        [[ 0, 0], [-1, 0], [+2, 0], [-1, 0], [+2, 0]],
        [[-1, 0], [ 0, 0], [ 0, 0], [ 0,+1], [ 0,-2]],
        [[-1, +1], [+1,+1], [-2,+1], [+1, 0], [-2, 0]],
        [[ 0,+1], [ 0,+1], [ 0,+1], [ 0,-1], [ 0,+2]]
    ],
    O: [
        [[ 0, 0]],
        [[ 0,-1]],
        [[-1,-1]],
        [[-1, 0]]
    ],
    T: [
        [[ 0, 0], [ 0, 0], [ 0, 0], [ 0, 0], [ 0, 0]],
        [[ 0, 0], [+1, 0], [+1,-1], [ 0,+2], [+1,+2]],
        [[ 0, 0], [ 0, 0], [ 0, 0], [ 0, 0], [ 0, 0]],
        [[ 0, 0], [-1, 0], [-1,-1], [ 0,+2], [-1,+2]]
    ],
    L: [
        [[ 0, 0], [ 0, 0], [ 0, 0], [ 0, 0], [ 0, 0]],
        [[ 0, 0], [+1, 0], [+1,-1], [ 0,+2], [+1,+2]],
        [[ 0, 0], [ 0, 0], [ 0, 0], [ 0, 0], [ 0, 0]],
        [[ 0, 0], [-1, 0], [-1,-1], [ 0,+2], [-1,+2]]
    ],
    J: [
        [[ 0, 0], [ 0, 0], [ 0, 0], [ 0, 0], [ 0, 0]],
        [[ 0, 0], [+1, 0], [+1,-1], [ 0,+2], [+1,+2]],
        [[ 0, 0], [ 0, 0], [ 0, 0], [ 0, 0], [ 0, 0]],
        [[ 0, 0], [-1, 0], [-1,-1], [ 0,+2], [-1,+2]]
    ],
    Z: [
        [[ 0, 0], [ 0, 0], [ 0, 0], [ 0, 0], [ 0, 0]],
        [[ 0, 0], [+1, 0], [+1,-1], [ 0,+2], [+1,+2]],
        [[ 0, 0], [ 0, 0], [ 0, 0], [ 0, 0], [ 0, 0]],
        [[ 0, 0], [-1, 0], [-1,-1], [ 0,+2], [-1,+2]]
    ],
    S: [
        [[ 0, 0], [ 0, 0], [ 0, 0], [ 0, 0], [ 0, 0]],
        [[ 0, 0], [+1, 0], [+1,-1], [ 0,+2], [+1,+2]],
        [[ 0, 0], [ 0, 0], [ 0, 0], [ 0, 0], [ 0, 0]],
        [[ 0, 0], [-1, 0], [-1,-1], [ 0,+2], [-1,+2]]
    ],
};

// used for blocksheet:
// enum minoIndexes {
//     'I',
//     'O',
//     'T',
//     'L',
//     'J',
//     'Z',
//     'S',
//     'G'
// };
const minoIndexes = {
    'I': 0,
    'O': 1,
    'T': 2,
    'L': 3,
    'J': 4,
    'Z': 5,
    'S': 6,
    'G': 7
};

export { types, offsets, minoIndexes };