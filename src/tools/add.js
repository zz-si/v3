export function plus_one(num1, num2) {
  // console.log(num1, num2);
  const res = num1 + 1;
  console.log(res, '+ 1 =');
  const a = 1;
  a = 2;
}

export async function myPromise() {
  const res = await plus_two(1);
  console.log(res, 'plus_two = ')
}

function plus_two(num) {
  return new Promise((res, rej) => {
    setTimeout(() => res(num), 500)
  })
}