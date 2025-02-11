import { env } from "../../shared/utils/env/env";

export class Email {
  public readonly value: string;

  constructor(email:string = env.EMAIL_FROM) {
    this.value = email.toLowerCase();
  }
};



