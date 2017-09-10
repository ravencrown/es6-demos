 class Timer {
     // end - 截止时间
     // update - 时间更新回调
     // handle - 倒计时结束，回调执行
     countdown(end, update, handle) {
        const now = new Date().getTime();
        const self = this;
        // 如果当前时间大于截止时间，说明倒计时结束
        if (now - end) {
            handle.call(self);
        } else {
            // 没结束
            let last_time = end - now;
            const px_d = 1000 * 60 * 60 * 24; // 一天的毫秒数
            const px_h = 1000 * 60 * 60; // 一小时的毫秒数
            const px_m = 1000 * 60; // 一分钟的毫秒数
            const px_s = 1000; // 一秒的毫秒数
            let d = Math.floor(last_time / px_d); // 剩余天数
            let h = Math.floor((last_time - d * px_d)/px_h); // 剩余小时数
            let m = Math.floor((last_time - d*px_d - h*px_h)/px_m); //剩余分钟数
            let s = Math.floor((last_time - d*px_d - h*px_h - m*px_m)/px_s); // 剩余分钟数
            let r = [];
            if (d > 0) {
                r.push(`<em>${d}</em>天`);
            }
            if (r.length || (h > 0)) {
                r.push(`<em>${h}</em>时`);
            }
            if (r.length || (m > 0)) {
                r.push(`<em>${m}</em>分`);
            }
            if (r.length || (s > 0)) {
                r.push(`<em>${s}</em>秒`);
            }
            self.last_time = r.join('');
            update.call(self, r.join(''));
            setTimeout(function() {
                self.countdown(end, update, handle);
            }, 1 * 1000);
        }
     }
 }

 export default Timer;