find ../proto -name '*.proto' | xargs npx pbjs -t static-module -w commonjs -o src/gen/proto.js -p ../proto
npx pbts -o src/gen/proto.d.ts src/gen/proto.js