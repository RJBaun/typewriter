const sentence = "this is just a test to make sure other string work";

let index = 0;
for (const letter of sentence) {
  setTimeout(() => {
    process.stdout.write(letter);
  }, 50 * index);
  index++;
}
setTimeout(() => {
  process.stdout.write('\n');
}, 50 * index);
