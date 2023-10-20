interface User {
  readonly dbId: number;
  email: string;
  userId: number;
  googleId?: string;
  startTrial:()=>string // string is return type
  trial():string // another syntax to show function ,string is return type
}

// we can add more property by reopening of an interface

interface User {
    gitToken:string
}

// Inheritance

interface Admin extends User {
    role:string
}

