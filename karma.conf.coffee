# Karma configuration
# Generated on Wed Sep 02 2015 23:55:19 GMT+0800 (CST)

module.exports = (config) ->
  config.set

    # base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: ''


    # frameworks to use
    # available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['jasmine', 'requirejs']


    # list of files / patterns to load in the browser
    files: [
      'dist/RongIMLib.js',
      {pattern: 'test/**/*Spec.coffee', included: false}
      'test/test-main.coffee'

    ]


    # list of files to exclude
    exclude: ['http://cdn.ronghub.com/protobuf-min-2.5.js']


    # preprocess matching files before serving them to the browser
    # available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors:
      'build/**/*.js': 'coverage'
      'test/**/*.coffee': 'coffee'

    coverageReporter:
      type : 'html'
      dir : 'test/coverage'

    # coffeePreprocessor:
    #   options:
    #     bare: true,
    #     sourceMap: false
    #   transformPath: (path) ->
    #     path.replace(/\.coffee$/, '.js')


    # test results reporter to use
    # possible values: 'dots', 'progress'
    # available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ['progress','coverage']


    # web server port
    port: 9876


    # enable / disable colors in the output (reporters and logs)
    colors: true


    # level of logging
    # possible values:
    # - config.LOG_DISABLE
    # - config.LOG_ERROR
    # - config.LOG_WARN
    # - config.LOG_INFO
    # - config.LOG_DEBUG
    logLevel: config.LOG_INFO


    # enable / disable watching file and executing tests whenever any file changes
    autoWatch: true


    # start these browsers
    # available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: ['Chrome']
    #browsers: ['Chrome', 'Firefox', 'Safari', 'PhantomJS', 'IE']


    # Continuous Integration mode
    # if true, Karma captures browsers, runs the tests and exits
    singleRun: false
