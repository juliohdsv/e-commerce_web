import { env } from "../../shared/utils/env/env";

class Email {
  public readonly value: string;

  constructor(email:string = env.EMAIL_FROM) {
    this.value = email.toLowerCase();
  }
};

export default new Email;
