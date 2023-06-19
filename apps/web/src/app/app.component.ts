import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { injectTRPC } from '@drizzle-conduit/data-access/trpc-client';

@Component({
  standalone: true,
  imports: [RouterModule],
  selector: 'drizzle-conduit-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  private readonly client = injectTRPC();
  title = 'web';

  ngOnInit(): void {
    this.client.user.create.query('haha').then(resp => {
      console.log({ resp });
    });
  }
}
