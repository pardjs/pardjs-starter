import { boot } from '@pardjs/core';

import { BlogsModule } from '@pardjs/blogs';

declare const module: any;

async function bootstrap() {
  const app = await boot([BlogsModule], 3003);

  if (module.hot) {
    module.hot.accept();
    module.hot.dispose(() => app.close());
  }
}
bootstrap();
