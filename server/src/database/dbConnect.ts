import { Pool } from 'pg';

const pool = new Pool({ 
    allowExitOnIdle: true,
});

export { pool };