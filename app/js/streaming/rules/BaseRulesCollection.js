/*
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 * author Digital Primates
 * copyright dash-if 2012
 */
MediaPlayer.rules.BaseRulesCollection = function () {
    "use strict";

    var rules = [];

    return {
        bandwidthRule: undefined,

        getRules: function () {
            return Q.when(rules);
        },

        setup: function () {
            var self = this;

            self.getRules().then(
                function (r) {
                    r.push(self.bandwidthRule);
                }
            );
        }
    };
};

MediaPlayer.rules.BaseRulesCollection.prototype = {
    constructor: MediaPlayer.rules.BaseRulesCollection
};