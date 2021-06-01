import Controller from '@ember/controller';
import { action } from '@ember/object';

export default class UsersUserController extends Controller {
  @action
  async modifyValue() {
    this.model.changeValue();
  }

  @action 
  async archiveUser() {
    if(confirm('Are you sure you want to change the archived status of this user?'))
      this.model.archiveUser()
  }
}
