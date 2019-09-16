class Test {
    constructor(msg) {
        this.msg = msg
    }

    say() {
        console.log("Executing say()")
        return this.msg
    }
}

export { Test }