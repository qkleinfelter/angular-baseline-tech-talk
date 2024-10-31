import { Routes } from '@angular/router';
import { ConditionalRenderingComponent } from '../pages/conditional-rendering/conditional-rendering.component';
import { PipesComponent } from '../pages/pipes/pipes.component';
import { CommunicationParentComponent } from '../pages/communication-parent/communication-parent.component';
import { RouteDataComponent } from '../pages/route-data/route-data.component';

export const routes: Routes = [
  { path: 'conditional-rendering', component: ConditionalRenderingComponent },
  { path: 'pipes', component: PipesComponent },
  { path: 'communication', component: CommunicationParentComponent },
  { path: 'route-data/:username', component: RouteDataComponent }
];
