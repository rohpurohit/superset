export function validateSnowflakeQuery(query) {
  // Check for common Snowflake SQL syntax
  const snowflakeKeywords = [
    'SELECT', 'FROM', 'WHERE', 'JOIN', 'ON', 'GROUP BY', 'ORDER BY', 'LIMIT', 'OFFSET',
    'INSERT INTO', 'VALUES', 'UPDATE', 'SET', 'DELETE', 'CREATE TABLE', 'DROP TABLE',
    'ALTER TABLE', 'ADD COLUMN', 'DROP COLUMN', 'RENAME COLUMN', 'COPY INTO', 'UNLOAD',
  ];

  const isValid = snowflakeKeywords.some(keyword => query.toUpperCase().includes(keyword));

  if (!isValid) {
    throw new Error('Invalid query for Snowflake compatibility.');
  }

  // Additional checks can be added here for specific Snowflake features or limitations

  return true; // Return true if the query is valid
}
