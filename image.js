let imgBase64String = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAALAAAACCCAYAAADmBUL4AAAACXBIWXMAAAsSAAALEgHS3X78AAAK6UlEQVR4nO3dW2wcVxnA8e/M7HrXWV/WjptY4IiKVAo0kLqlUEBC5AEkiNKoVauCKlpFgESSShUpKQQhWucJq6SJFJRUPCBKCwVFQaA0SaF9IAFUiEDUhKYSIgbn0pJQey921/ZeZg46W4+1tne9cznfzJmZ7y/5KYr3zOSnyezMmTOMcw6U/IoV8yRj8JuepHaMdi9eWlQ3LMgE3lLN3JbS2JHpqrknvnsCPwIsOQvvoYs5XfwQYtwIsMQa8c7VTLhWqgIhxo0AS2o5XitCjBsBllArvFaEGC8C7LF2eK0IMU4E2EN28VoRYvkRYJc5xWtFiOVGgF3kFq8VIZYXAXaYV7xWhFhOBNhBsvBaEWLvEWCbycZrRYi9RYBthIXXihC7jwC3CRuvFSF2FwFeJb/wWjUinjP4KPoHRiCaD9wiv/E2NpRJwmOb+w2NwfGkxh709cNDFh2BmxQkXmg4EpscHqia/AXfBxCiCPCygsZrRYjtRYAbUgWvFSFuHwFeSDW8VoR49QiwwnitCHHrYg9YdbxWhLh5sQYcFrxWhHhlcQWcDRteK0K8tDjeyMhWTH5+ct7YGDa8jYmbHXs39/OywU/1dmg71BmZv8XtCBwJvLBwJD58McdSOtsu/jdRYEiBFCfAkcFrRYjjAzhyeK3ijjgOgCOL1yrOiKMOOPJ4reKKOMqAY4PXKo6Iowo4dnit4oY4ioBji9cqToijdiMjO1szXytUzA1xxduYuNmx6wNZUwN2Oqo3O6IEOPtOzbxQLJsbDr+Rg7jjtepMaPXHkzIJ7UwUEUflFILwtkjsC/G/kZj3EcXTiSgAJrxtijLisAMmvDaLKuIwAya8Dosi4rACJrwuixriMAImvB6LEuKwASa8kooK4jABJrySE/vwSqmq6xoMi/0bxm1IKDAGO9Xxvp4vbzgxMUN4JfXQLb3wob7U1a6EtgUACmHchjAAXsT7/KWiAsOJRlHACyE4hSC8CEUFLygOmPAiZBPvMC/kQ7HItqqnEIQXIbt4oVI5D+m0zgt5YNm+Yypvk4pHYMKLkBO85R/9oGN+ZJ8O6fQR1Y/EqgEmvAg5xVs79wqYE+MQBsQqzQcmvAjZxJuFauV65ec/TlXP/GrJH2g3b4T0yEED5ucfVfF0QpUjMOFFyC5ePjN9ofbquRV4RaofiVUATHgRsnupjOennjOvXt5QfubploNQGXHQgAkvQrbxzkx/Gzh8vvz0gbaDUBVxkOfAhBchBzcpxPyH1+b2P1LHaTfVzomDOgITXoQc4M3yYv505bkfOsILCh6JgwBMeBFycnuYF/OHzP++ta7ZlzY7qYTYb8CEFyGHcxuGWbrzofLRpzzdhVUFsZ+ACS9CTifm8Jnpk9UXTyT42zc8D0YFxH4BJrwIOcYrkFXK762c+Km0wQSN2A/AhBchF1MisyyTOVQ++n3p/+ZBIsYGTHgRcjOfl+cmR4zxf+nGGxdQxhQUYkzAhBchl5PRs6yrZ3f1+E9Qp88GgRgLMOFFyO2TFHy2tN+49M8OrKNvY34jxgBMeBHy9BgQ57uqJ573bax+IpYNmPAi5PEZtp18arLLj6NvY0sQz5ZGsT5HJmDCi5DXBzB5bnJ/9fQv9SDGvohY0/ZBpYLyWlxZgAkvQhKeHr6ZZbo2Gn/9U2DbYCHmpvEABmIZgAkvQjIefefF/BO1P/8hwUvvBLotmIi9Aia8CElbtyHZcU8twKNvY1iIvQAmvAhJXHRkGDStx/jLq8psGwZit4AJL0IyV8zhucmdxvk/BvLlbbVkI3YDmPAihLDc0+dUOX1YnkzETgETXoQQ8GZZ/8Am0+drv06ShdgJYMKLENJCe8PmtSuVoK8+tEsGYruACS9CWKtE8tzkPcY//tah0ra2ahGxUfsiz085XineDmDCixDqEqea/hmnD2sGWR3xgccZpDu3O0XcDjDhRQh9fd5kcsi8/G8FttR+bhGvBpjwIuTH4tIs09UbpiOwlRvErQATXoR8Whl9q3n9TbW/va2SU8TNABNehHxc1j/Lc7muwDZUQk4QLwdMeBHy+Z0Uw+bl8J0+LM8u4kbAhBchv1+oYr51dRAUv/5rNzuILcCEF6FA3gZk8gGfNxO1dog1wotTUK+yYr3ZW/x+fAi71RALwF9PMDYk3oBJySlK72FTJYF47pu7GZ+Z2daIWAAeKRv81GOb+43ORBhfXq9WhBcvsZ7b/IF9eiPiutjeDm1HJqGdIcTeIrz4iQlKArE4nRBnD4taCbG3CK9/dTz8NYBa7RoAPLtEKiF2F+H1r9Tub4B+x11XWXdPfV+vUEqInaUk3kyob8S1bDleaDUXghDbS0W8/O0bY/r73q/ASOTWDC+sNhuNEK+eqqcNLNsXuVOYVnih3XxgQtw8lc95Wf/ABLtpvQIj8R7LdEF635Mt8YKdJzII8dJC8IVtjK1/T02BcXiqjveJp0DbtLklXrD7TBwhfreQXG0oaIPhBmzhZf0Dq+IFJ08lxxmx2N4QXSobY9m+tALjcJUTvOB0XYg4IhbbuffW/lBd5+X5qRv6rVsUGImznOIFNyvzxAmxhbc3pYXrJkW1OibeaRym3OAFt2ujxQFxaPGKOtec00J0LdgtXvCyOqWF+Du3rTWHMkm3v0bJQo1XgOjueUnfckdFgaG0zQte8Lo+sECsATu9d3M/jwrisONdaIx1dXPVrwd7xQsyVmgXiMV84iggjgjeeryQ/3vio59UYCTNk4EXZL0jIwqIo4RXxG5a/4yqVyLqeJ88aLB1g+Ne8ILMtxSFGXHU8C50Vr/zE3UsKmXh1dYPjrPONXd63ddSLyGEEXFE8Yom+Mz0VYFYlRrxQip9l4x9Lf0aWJgQC7ziUmBfSpuI5GR0wxhNfPxTVQVGgoIXsN6VHAbEFt6BtD6+JqHdHsUnKVi27wX99o8lg74agYUXMN9WrzLiRrwdGpO6QxWrwP93/bfJT382sFFh4gVMwKAo4hjhrcfWDY4mtt9nBPLZyHgBGzAsINYZ/EKgCRpx3PAudBZmS5cSPh+F/cALfgAWJTX2oMbgeJCIY4q3HusfGO34wk7f5gj7hRf8AgwBI44z3oWehc41RT+Own7iBT8BQ0CICe+7sc7Or2IfhRfvsHV3n4FUepMf+9r3uZB+Iia8S/o1AB/vuP9LKL+8ES/rW7sD5UOaFMhkXj8QE96Vsf6BXcm776/Jvr0cFF4ICjAgI7bwivnKhHdJZ/ls6SWxzoKsgsQLQQIGJMSNeMUlPMK7NNa39mH9to+UdQlTLYPGC0EDBsmIm+ClVlbgxcJXUnseN72cSqiAF1QADAuIa5x/1wtiwms/NrDuZ1Cr/t7tqYQqeEEVwKJMQvte2eSPukFMeJ3Hunvu1T744WJy272O/q5KeEElwKKepHbMKWLC67oCy3RtFYtF230EXzW8oBpgcIiY8HpujBfyj6RHDhrtzodVxCtinHMFhrGy6aq5J6WxI4cu5vRrpZVzsgmvvMQLU8SLU+ovUGnykkRV8YLKgGEVxIRXfnxm+nc8N7l17lt7lvxulfGCiqcQjTU7nSC8OIkvdeIR98YrE6rjrSeOwKr/FCvGnvmaWTv8+hR/s1StFcrGyTCMO4Q/WXO6eKV69mVe+vJ93Lj8n5qZm1R6Xyt9CtGYOJ3oSWpHixXzRTryopblM9MXIJEYgvm5U8oeeRcKDeCFttafMKCwy4qXCIq3uCq9pwHg/wfGNcIGRzhuAAAAAElFTkSuQmCC";

export {imgBase64String};