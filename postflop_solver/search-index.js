var searchIndex = JSON.parse('{\
"postflop_solver":{"doc":"An open-source postflop solver library.","t":[4,3,13,13,13,13,4,3,4,13,3,13,13,3,13,13,8,8,13,3,3,17,13,3,3,13,13,13,3,13,3,13,11,11,12,11,11,11,11,11,11,11,11,11,12,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,5,5,5,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,5,5,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,12,11,11,11,11,11,11,11,11,11,11,11,11,11,12,11,11,11,11,11,11,11,11,11,5,12,12,5,11,11,11,11,11,11,11,11,11,11,12,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,12,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,12,11,11,11,11,11,11,11,11,11,11,11,11,11,12,12,11,11,11,11,11,11,12,12,12,11,11,11,11,5,5,12,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,12,12,12,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11],"n":["Action","ActionTree","Additive","AllIn","AllIn","Bet","BetSize","BetSizeCandidates","BoardState","Call","CardConfig","Chance","Check","DonkSizeCandidates","Flop","Fold","Game","GameNode","Geometric","MutexGuardLike","MutexLike","NOT_DEALT","None","PostFlopGame","PostFlopNode","PotRelative","PrevBetRelative","Raise","Range","River","TreeConfig","Turn","actions","add_action","add_allin_threshold","add_line","added_lines","added_lines","allocate_memory","apply_history","apply_history","available_actions","back_to_root","back_to_root","bet","borrow","borrow","borrow","borrow","borrow","borrow","borrow","borrow","borrow","borrow","borrow","borrow","borrow","borrow_mut","borrow_mut","borrow_mut","borrow_mut","borrow_mut","borrow_mut","borrow_mut","borrow_mut","borrow_mut","borrow_mut","borrow_mut","borrow_mut","borrow_mut","cache_normalized_weights","card_config","card_from_chars","card_from_str","card_to_string","clear","clone","clone","clone","clone","clone","clone","clone","clone","clone_into","clone_into","clone_into","clone_into","clone_into","clone_into","clone_into","clone_into","cmp","cmp","compute_average","compute_exploitability","config","current_player","default","default","default","default","default","default","default","default","default","default","default","deref","deref","deref","deref","deref","deref","deref","deref","deref","deref","deref","deref","deref","deref","deref_mut","deref_mut","deref_mut","deref_mut","deref_mut","deref_mut","deref_mut","deref_mut","deref_mut","deref_mut","deref_mut","deref_mut","deref_mut","deref_mut","donk","drop","drop","drop","drop","drop","drop","drop","drop","drop","drop","drop","drop","drop","effective_stack","eq","eq","eq","eq","eq","eq","equity","expected_values","expected_values_detail","finalize","flop","flop_bet_sizes","flop_from_str","fmt","fmt","fmt","fmt","fmt","fmt","fmt","fmt","fmt","fmt","force_allin_threshold","from","from","from","from","from","from","from","from","from","from","from","from","from","from_hands_weights","from_raw_data","from_sanitized_str","from_str","get_hands_weights","get_weight_by_cards","get_weight_offsuit","get_weight_pair","get_weight_suited","history","history","init","init","init","init","init","init","init","init","init","init","init","init","init","initial_state","into","into","into","into","into","into","into","into","into","into","into","into","into","invalid_terminals","is_chance_node","is_chance_node","is_empty","is_terminal_action","is_terminal_node","lock","memory_usage","merging_threshold","new","new","new","new","normalized_weights","ones","partial_cmp","partial_cmp","partial_cmp","play","play","possible_cards","private_cards","raise","range","raw_data","remove_action","remove_current_node","remove_line","removed_lines","removed_lines","river","river_bet_sizes","river_donk_sizes","set_weight_by_cards","set_weight_offsuit","set_weight_pair","set_weight_suited","solve","solve_step","starting_pot","strategy","to_owned","to_owned","to_owned","to_owned","to_owned","to_owned","to_owned","to_owned","to_string","tree_config","try_from","try_from","try_from","try_from","try_from","try_from","try_from","try_from","try_from","try_from","try_from","try_from","try_from","try_from","try_from","try_into","try_into","try_into","try_into","try_into","try_into","try_into","try_into","try_into","try_into","try_into","try_into","try_into","turn","turn_bet_sizes","turn_donk_sizes","type_id","type_id","type_id","type_id","type_id","type_id","type_id","type_id","type_id","type_id","type_id","type_id","type_id","undo","update_config","weights","with_config"],"q":["postflop_solver","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","",""],"d":["Available actions of the postflop game.","A struct representing an abstract game tree.","Bet size specifying constant addition.","All-in action with a specified amount.","Bet size representing all-in.","Bet action with a specified amount.","Bet size specification.","Bet size candidates for the first bets and raises.","An enum representing the board state.","Call action.","A struct containing the card configuration.","Chance action with a card ID (of range [<code>0</code>, <code>52</code>)).","Check action.","Bet size candidates for the donk bets.","","Fold action.","The trait representing a game.","The trait representing a node in game tree.","Geometric bet size for <code>i32</code> streets with maximum …","Smart pointer like wrapper that is returned when <code>MutexLike</code> …","Mutex-like wrapper, but it actually does not perform any …","Constant representing that the card is not yet dealt.","(Default value)","A struct representing a postflop game.","A struct representing a node in a postflop game tree.","Bet size relative to the current pot size.","Bet size relative to the previous bet size (only valid for …","Raise action with a specified amount.","A struct representing a player’s range.","","A struct containing the game tree configuration.","","Obtains all possible actions at the current node.","Adds a given action to the current node.","Add all-in action if the ratio of maximum bet size to the …","Adds a given line to the action tree.","Obtains the added lines.","Obtains the list of added lines.","Allocates the memory.","Applies the given history from the root node.","Applies the given action history from the root node.","Returns the available actions for the current node.","Moves the current node back to the root node.","Moves back to the root node.","Bet size candidates for first bet.","","","","","","","","","","","","","","","","","","","","","","","","","","","Computes the normalized weights and caches them.","Obtains the card configuration.","Attempts to read the next card from a char iterator.","Attempts to convert a string into a card.","Attempts to convert a card into a string.","Clears the range.","","","","","","","","","","","","","","","","","","","Computes the average with given weights.","Computes the exploitability of the current strategy.","Obtains the configuration of the game tree.","Returns the current player (0 = OOP, 1 = IP).","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","Initial effective stack. Must be greater than <code>0</code>.","","","","","","","Returns the equity of each private hand of the given …","Returns the expected values of each private hand of the …","Returns the expected values of each action of each private …","Finalizes the solving process.","Flop cards: each card must be unique and in range [<code>0</code>, <code>52</code>).","Bet size candidates of each player for the flop.","Attempts to convert an optionally space-separated string …","","","","","","","","","","","Force all-in action if the SPR (stack/pot) after the …","Returns the argument unchanged.","Returns the argument unchanged.","Returns the argument unchanged.","Returns the argument unchanged.","Returns the argument unchanged.","Returns the argument unchanged.","Returns the argument unchanged.","Returns the argument unchanged.","Returns the argument unchanged.","Returns the argument unchanged.","Returns the argument unchanged.","Returns the argument unchanged.","Returns the argument unchanged.","Attempts to create a range from a list of hands with their …","Attempts to create a range from raw data.","Attempts to create a range from a sanitized range string.","","Returns a list of all hands in this range and their …","Obtains the weight of a specified hand.","Obtains the average weight of specified offsuit hands.","Obtains the average weight of specified pair hands.","Obtains the average weight of specified suited hands.","Returns the history of the current node.","Obtains the current action history.","","","","","","","","","","","","","","Initial state of the game (flop, turn, or river).","Calls <code>U::from(self)</code>.","Calls <code>U::from(self)</code>.","Calls <code>U::from(self)</code>.","Calls <code>U::from(self)</code>.","Calls <code>U::from(self)</code>.","Calls <code>U::from(self)</code>.","Calls <code>U::from(self)</code>.","Calls <code>U::from(self)</code>.","Calls <code>U::from(self)</code>.","Calls <code>U::from(self)</code>.","Calls <code>U::from(self)</code>.","Calls <code>U::from(self)</code>.","Calls <code>U::from(self)</code>.","Returns a list of all terminal nodes that should not be.","Returns whether the current node is a chance node.","Returns whether the current node is a chance node.","Returns whether the range is empty.","Returns a list of booleans indicating whether the …","Returns whether the current node is a terminal node.","Acquires a mutex-like object <strong>without</strong> performing any …","Returns the estimated memory usage in bytes (uncompressed, …","Merge bet actions if there are bet actions with “close”…","Creates a new empty <code>PostFlopGame</code> (needs <code>update_config()</code> …","Creates a new <code>ActionTree</code> with the specified configuration.","Creates a new <code>MutexLike</code> with the given value.","Creates an empty range.","Returns the normalized weights of each private hand of the …","Creates a full range.","","","","Plays the given action. Playing an action from a terminal …","Plays the given action. Returns <code>Ok(())</code> if the action is …","If the current node is a chance node, returns a list of …","Returns the card list of private hands of the given player.","Bet size candidates for raise.","Initial range of each player.","Obtains the raw data of the range.","Removes a given action from the current node.","Removes the current node.","Removes a given line from the action tree.","Obtains the removed lines.","Obtains the list of removed lines.","River card: must be in range [<code>0</code>, <code>52</code>) or <code>NOT_DEALT</code>.","Bet size candidates of each player for the river.","Donk size candidates for the river (set <code>None</code> to use …","Sets the weight of a specified hand.","Sets the weights of specified offsuit hands.","Sets the weights of specified pair hands.","Sets the weights of specified suited hands.","Performs Discounted CFR algorithm until the given number …","Proceeds Discounted CFR algorithm for one iteration.","Starting pot size. Must be greater than <code>0</code>.","Returns the strategy of the current player.","","","","","","","","","","Obtains the action tree.","","","","","","","Attempts to convert comma-separated strings into bet sizes.","","Attempts to convert comma-separated strings into bet sizes.","","","","","","","","","","","","","","","","","","","","Turn card: must be in range [<code>0</code>, <code>52</code>) or <code>NOT_DEALT</code>.","Bet size candidates of each player for the turn.","Donk size candidates for the turn (set <code>None</code> to use default …","","","","","","","","","","","","","","Undoes the last action. Returns <code>Ok(())</code> if the action is …","Updates the game configuration. The solved result will be …","Returns the weights of each private hand of the given …","Creates a new <code>PostFlopGame</code> with the specified …"],"i":[0,0,15,2,15,2,0,0,0,2,0,2,2,0,11,2,0,0,15,0,0,0,2,0,0,15,15,2,0,11,0,11,1,1,12,1,5,1,5,5,1,5,5,1,13,5,19,2,11,12,1,13,14,15,7,22,23,10,5,19,2,11,12,1,13,14,15,7,22,23,10,5,5,0,0,0,10,2,11,12,13,14,15,7,10,2,11,12,13,14,15,7,10,2,11,0,0,1,5,5,19,2,11,12,1,13,14,7,22,10,5,19,2,11,12,1,13,14,15,7,22,23,23,10,5,19,2,11,12,1,13,14,15,7,22,23,23,10,14,5,19,2,11,12,1,13,14,15,7,22,23,10,12,2,11,13,14,15,10,5,5,5,0,7,12,0,2,11,12,13,14,15,7,22,23,10,12,5,19,2,11,12,1,13,14,15,7,22,23,10,10,10,10,10,10,10,10,10,10,5,1,5,19,2,11,12,1,13,14,15,7,22,23,10,12,5,19,2,11,12,1,13,14,15,7,22,23,10,1,5,1,10,1,5,22,5,12,5,1,22,10,5,10,2,11,15,5,1,5,5,13,7,10,1,1,1,5,1,7,12,12,10,10,10,10,0,0,12,5,2,11,12,13,14,15,7,10,10,5,5,19,2,11,12,1,13,13,14,14,15,7,22,23,10,5,19,2,11,12,1,13,14,15,7,22,23,10,7,12,12,5,19,2,11,12,1,13,14,15,7,22,23,10,1,5,5,5],"f":[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,[1],[[1,2],[[4,[3]]]],0,[1,[[4,[3]]]],[5],[1],[[5,6]],[5],[1,[[4,[3]]]],[5],[5],[1],0,[[]],[[]],[[]],[[]],[[]],[[]],[[]],[[]],[[]],[[]],[[]],[[]],[[]],[[]],[[]],[[]],[[]],[[]],[[]],[[]],[[]],[[]],[[]],[[]],[[]],[[]],[5],[5,7],[[],[[4,[8,3]]]],[9,[[4,[8,3]]]],[8,[[4,[3,3]]]],[10],[2,2],[11,11],[12,12],[13,13],[14,14],[15,15],[7,7],[10,10],[[]],[[]],[[]],[[]],[[]],[[]],[[]],[[]],[[2,2],16],[[11,11],16],[[],17],[[],17],[1,12],[5,18],[[],5],[[],19],[[],2],[[],11],[[],12],[[],1],[[],13],[[],14],[[],7],[[],[[22,[[0,[20,21]]]]]],[[],10],[18],[18],[18],[18],[18],[18],[18],[18],[18],[18],[18],[[[23,[20]]]],[18],[18],[18],[18],[18],[18],[18],[18],[18],[18],[18],[18],[18],[[[23,[20]]]],[18],[18],0,[18],[18],[18],[18],[18],[18],[18],[18],[18],[18],[18],[18],[18],0,[[2,2],6],[[11,11],6],[[13,13],6],[[14,14],6],[[15,15],6],[[10,10],6],[[5,18],[[24,[17]]]],[[5,18],[[24,[17]]]],[[5,18],[[24,[17]]]],[[]],0,0,[9,[[4,[3]]]],[[2,25],26],[[11,25],26],[[12,25],26],[[13,25],26],[[14,25],26],[[15,25],26],[[7,25],26],[[[22,[[0,[27,20]]]],25],26],[[[23,[[0,[27,20]]]],25],26],[[10,25],26],0,[[]],[[]],[[]],[[]],[[]],[[]],[[]],[[]],[[]],[[]],[[]],[[]],[[]],[[],[[4,[10,3]]]],[[],[[4,[10,3]]]],[9,[[4,[10,3]]]],[9,[[4,[10]]]],[[10,28]],[[10,8,8],17],[[10,8,8],17],[[10,8],17],[[10,8,8],17],[5],[1],[[],18],[[],18],[[],18],[[],18],[[],18],[[],18],[[],18],[[],18],[[],18],[[],18],[[],18],[[],18],[[],18],0,[[]],[[]],[[]],[[]],[[]],[[]],[[]],[[]],[[]],[[]],[[]],[[]],[[]],[1,[[24,[[24,[2]]]]]],[5,6],[1,6],[10,6],[1,[[24,[6]]]],[5,6],[[[22,[20]]],[[23,[20]]]],[5],0,[[],5],[12,[[4,[1,3]]]],[[],22],[[],10],[[5,18]],[[],10],[[2,2],[[29,[16]]]],[[11,11],[[29,[16]]]],[[15,15],[[29,[16]]]],[[5,18]],[[1,2],[[4,[3]]]],[5,28],[[5,18]],0,0,[10],[[1,2],[[4,[3]]]],[1,[[4,[3]]]],[1,[[4,[3]]]],[5],[1],0,0,0,[[10,8,8,17]],[[10,8,8,17]],[[10,8,17]],[[10,8,8,17]],[[30,17,6],17],[30],0,[5,[[24,[17]]]],[[]],[[]],[[]],[[]],[[]],[[]],[[]],[[]],[10,3],[5,12],[[],4],[[],4],[[],4],[[],4],[[],4],[[],4],[[],[[4,[13]]]],[[],4],[9,[[4,[14]]]],[[],4],[[],4],[[],4],[[],4],[[],4],[[],4],[[],4],[[],4],[[],4],[[],4],[[],4],[[],4],[[],4],[[],4],[[],4],[[],4],[[],4],[[],4],[[],4],0,0,0,[[],31],[[],31],[[],31],[[],31],[[],31],[[],31],[[],31],[[],31],[[],31],[[],31],[[],31],[[],31],[[],31],[1,[[4,[3]]]],[[5,7,1],[[4,[3]]]],[[5,18]],[[7,1],[[4,[5,3]]]]],"p":[[3,"ActionTree"],[4,"Action"],[3,"String"],[4,"Result"],[3,"PostFlopGame"],[15,"bool"],[3,"CardConfig"],[15,"u8"],[15,"str"],[3,"Range"],[4,"BoardState"],[3,"TreeConfig"],[3,"BetSizeCandidates"],[3,"DonkSizeCandidates"],[4,"BetSize"],[4,"Ordering"],[15,"f32"],[15,"usize"],[3,"PostFlopNode"],[8,"Sized"],[8,"Default"],[3,"MutexLike"],[3,"MutexGuardLike"],[3,"Vec"],[3,"Formatter"],[6,"Result"],[8,"Debug"],[15,"u64"],[4,"Option"],[15,"u32"],[3,"TypeId"]]}\
}');
if (typeof window !== 'undefined' && window.initSearch) {window.initSearch(searchIndex)};
if (typeof exports !== 'undefined') {exports.searchIndex = searchIndex};
