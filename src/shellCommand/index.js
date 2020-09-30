// import child_exec from 'child_process'
/**
 * Promise-wrapper for shell-script execution
 *
 * @param  {String} cmd command to be executed
 * @return {Promise}
 */
export default function (cmd) {
  return new Promise((resolve, reject) => {
    global.MainRpc.command_exec(cmd, (error, stdout) =>
      error ? reject(error) : resolve(stdout)
    )
  })
}
