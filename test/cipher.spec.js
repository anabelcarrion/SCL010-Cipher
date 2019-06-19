describe('cipher', () => {

      it('debería ser un objeto', () => {
        assert.equal(typeof cipher, 'object');
      });

      describe('cipher.encode', () => {

        it('debería ser una función', () => {
          assert.equal(typeof cipher.encode, 'function');
        });

        it('debería retornar "HIJKLMNOPQRSTUVWXYZABCDEFG" para "ABCDEFGHIJKLMNOPQRSTUVWXYZ" con offset 33', () => {
          assert.equal(window.cipher.encode("ABCDEFGHIJKLMNOPQRSTUVWXYZ", 33), "HIJKLMNOPQRSTUVWXYZABCDEFG");
        });

        it('debería retornar "hijklmnopqrstuvwxyzabcdefg" para "abcdefghijklmnopqrstuvwxyz" con offset 33', () => {
          assert.equal(window.cipher.encode("abcdefghijklmnopqrstuvwxyz", 33), "hijklmnopqrstuvwxyzabcdefg");
        });

        it('debería retornar "1234567890" para "1234567890" con offset 33', () => {
          assert.equal(window.cipher.encode("1234567890", 33), "1234567890");
        });

      });

      describe('cipher.decode', () => {

        it('debería ser una función', () => {
          assert.equal(typeof cipher.decode, 'function');
        });

        it('debería retornar "HIJKLMNOPQRSTUVWXYZABCDEFG" para "ABCDEFGHIJKLMNOPQRSTUVWXYZ" con offset 33', () => {
          assert.equal(window.cipher.decode("ABCDEFGHIJKLMNOPQRSTUVWXYZ", 33), "HIJKLMNOPQRSTUVWXYZABCDEFG");
        });

        it('debería retornar "hijklmnopqrstuvwxyzabcdefg" para "abcdefghijklmnopqrstuvwxyz" con offset 33', () => {
          assert.equal(window.cipher.decode("abcdefghijklmnopqrstuvwxyz", 33), "hijklmnopqrstuvwxyzabcdefg");
        });

        it('debería retornar "1234567890" para "1234567890" con offset 33', () => {
          assert.equal(window.cipher.decode("1234567890", 33), "1234567890");
        });

      });
    });