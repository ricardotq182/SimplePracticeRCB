import { test } from '../fixtures/auth-fixture';
import CreateTask from '../page-objects/create-task';
import CompleteTask from '../page-objects/complete-task';

//import LoginPage from '../page-objects/login.page';


test('User login SimplePractice', async ({ login, page }) => {

  await login();
  const uniqueName = `ricardo cortes ${Date.now()}`;
  await new CreateTask(page).createTask(uniqueName);
  await new CompleteTask(page).completeTask(uniqueName);

});