import { boot } from '@pardjs/core';

import { BlogsModule } from '@pardjs/blogs';

async function bootstrap() {
  const app = await boot([BlogsModule], 3003);
}
bootstrap();
