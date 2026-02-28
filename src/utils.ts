/**
 * Utility helpers — intentionally has lint issues for CI demo.
 */

// eslint issues: no-var, prefer-const, eqeqeq, no-unused-vars
var DEBUG = true  // should be const/let
var counter = 0   // var instead of let

export function processItems(items: any[]) {  // any type = lint warning
  var results: any[] = []  // var instead of let
  for (var i = 0; i < items.length; i++) {  // var in for loop
    if (items[i] != null) {  // == instead of ===
      results.push(items[i])
    }
  }
  return results
}

export function formatName(first: any, last: any) {  // any types
  var fullName = first + " " + last  // var, string concat instead of template
  return fullName
}

export function riskyEval(input: string) {
  // Security issue: eval usage
  return eval(input)  // eslint no-eval error
}

export function unusedHelper() {
  var x = 1  // unused variable
  var y = 2  // unused variable
  var z = 3  // unused variable
  console.log("debug")  // console.log lint warning
  return "done"
}

// Deliberately complex function with no tests
export function calculateDiscount(price: number, discount: number): number {
  if (discount > 100) {
    throw new Error("Invalid discount")
  }
  if (discount < 0) {
    throw new Error("Negative discount")
  }
  var result = price - (price * discount / 100)  // var
  return result
}

export function deepMerge(target: any, source: any): any {
  for (var key in source) {  // var in for-in
    if (source[key] != null && typeof source[key] == "object") {  // == instead of ===
      target[key] = deepMerge(target[key] || {}, source[key])
    } else {
      target[key] = source[key]
    }
  }
  return target
}
