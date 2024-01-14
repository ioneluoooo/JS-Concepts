class Bank {
    constructor() {
        this.bankName = ''
        this.branches = []
    }

    addBranch(branch) {
        this.branches.push(branch)
        console.log(`${branch} added succesefully`)
    }

    removeBranch(branch) {
        const index = this.branches.indexOf(branch)
        if (index !== -1) {
            this.branches.pop(index)
            return console.log(`Branch ${branch} removed succesefully`)
        }
        else {
            return console.log(`This ${branch} does not exist`)
        }
    }

    getBranches() {
        if (this.branches.length === 0) {
            return console.log('No branches there')
        }
        else {
            console.log('List of Branches')
            this.branches.forEach((branch, index) => {
                console.log(`${index + 1}. ${branch}`)
            })
        }
    }
}

const sperbank = new Bank()

sperbank.addBranch('Second branch')
sperbank.addBranch('Third branch')

// sperbank.getBranches()

sperbank.removeBranch('Second branch')

sperbank.getBranches()
