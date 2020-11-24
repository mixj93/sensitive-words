import { sensitiveWords } from '.'

test('replaces blacklisted words with asterisk', () => {
  expect(
    sensitiveWords('The name of the NX will be Nintedo Switch.', ['switch'])
  ).toBe('The name of the NX will be Nintedo ****.')
})

test('replaces multiple instances of blacklisted words', () => {
  expect(
    sensitiveWords(
      'The name of the NX will be Nintedo Switch. The switch will be awesome!',
      ['switch']
    )
  ).toBe('The name of the NX will be Nintedo ****. The **** will be awesome!')
})
