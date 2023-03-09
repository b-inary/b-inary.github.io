var searchIndex = JSON.parse('{\
"postflop_solver":{"doc":"An open-source postflop solver library.","t":"EDNNNNEDEDNDNNDNNIINDDRNDDNNNDNDNLMLLLLLLLLLLMLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLFFFLLLLLLLLLLLLLLLLLLLLLFFFFLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLMLLLLLLLLLLLLLLMLLLLLLLLLLLLLLLLLLLLFLMMFLLLLLLLLLLLLMLLLLLLLLLLLLLLLLLLLLLLLLLFFLLLLLLLLLLLLLLMLLLLLLLLLLLLLLLLLLLLLLLLLLLMLLLLLLLLLLLLLLLLLLLLLLLLLLMMMMLLLLLLLLMMMLLLLLLFFMLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLMMMLLLLLLLLLLLLLLLLLLL","n":["Action","ActionTree","Additive","AllIn","AllIn","Bet","BetSize","BetSizeCandidates","BoardState","BunchingData","Call","CardConfig","Chance","Check","DonkSizeCandidates","Flop","Fold","Game","GameNode","Geometric","MutexGuardLike","MutexLike","NOT_DEALT","None","PostFlopGame","PostFlopNode","PotRelative","PrevBetRelative","Raise","Range","River","TreeConfig","Turn","add_action","add_allin_threshold","add_line","added_lines","added_lines","allocate_memory","apply_history","apply_history","available_actions","available_actions","back_to_root","back_to_root","bet","borrow","borrow","borrow","borrow","borrow","borrow","borrow","borrow","borrow","borrow","borrow","borrow","borrow","borrow","borrow_decode","borrow_decode","borrow_decode","borrow_decode","borrow_decode","borrow_decode","borrow_decode","borrow_decode","borrow_mut","borrow_mut","borrow_mut","borrow_mut","borrow_mut","borrow_mut","borrow_mut","borrow_mut","borrow_mut","borrow_mut","borrow_mut","borrow_mut","borrow_mut","borrow_mut","cache_normalized_weights","card_config","card_from_chars","card_from_str","card_to_string","clear","clone","clone","clone","clone","clone","clone","clone","clone","clone","clone_into","clone_into","clone_into","clone_into","clone_into","clone_into","clone_into","clone_into","clone_into","cmp","cmp","compute_average","compute_current_ev","compute_exploitability","compute_mes_ev","config","current_board","current_locking_strategy","current_player","decode","decode","decode","decode","decode","decode","decode","decode","decode","decode","decode","default","default","default","default","default","default","default","default","default","default","default","deref","deref","deref","deref","deref","deref","deref","deref","deref","deref","deref","deref","deref","deref","deref","deref_mut","deref_mut","deref_mut","deref_mut","deref_mut","deref_mut","deref_mut","deref_mut","deref_mut","deref_mut","deref_mut","deref_mut","deref_mut","deref_mut","deref_mut","donk","drop","drop","drop","drop","drop","drop","drop","drop","drop","drop","drop","drop","drop","drop","effective_stack","encode","encode","encode","encode","encode","encode","encode","encode","encode","encode","encode","eq","eq","eq","eq","eq","eq","equity","expected_values","expected_values_detail","finalize","flop","flop","flop_bet_sizes","flop_from_str","fmt","fmt","fmt","fmt","fmt","fmt","fmt","fmt","fmt","fmt","fmt","fold_ranges","force_allin_threshold","from","from","from","from","from","from","from","from","from","from","from","from","from","from","from_hands_weights","from_raw_data","from_sanitized_str","from_str","get_hands_weights","get_weight_by_cards","get_weight_offsuit","get_weight_pair","get_weight_suited","history","history","hole_to_string","holes_to_strings","init","init","init","init","init","init","init","init","init","init","init","init","init","init","initial_state","into","into","into","into","into","into","into","into","into","into","into","into","into","into","invalid_terminals","invert","is_chance_node","is_chance_node","is_empty","is_memory_allocated","is_ready","is_terminal_node","is_terminal_node","lock","lock_current_strategy","memory_usage","memory_usage_bunching","merging_threshold","new","new","new","new","new","normalized_weights","ones","partial_cmp","partial_cmp","partial_cmp","phase","phase1","phase1_prepare","phase1_proceed_by_percent","phase2","phase2_prepare","phase2_proceed_by_percent","phase3","phase3_prepare","phase3_proceed_by_percent","play","play","possible_cards","private_cards","process","progress_percent","raise","rake_cap","rake_rate","range","raw_data","remove_action","remove_current_node","remove_line","remove_lines","removed_lines","removed_lines","reset_bunching_effect","river","river_bet_sizes","river_donk_sizes","set_bunching_effect","set_target_storage_mode","set_weight_by_cards","set_weight_offsuit","set_weight_pair","set_weight_suited","solve","solve_step","starting_pot","storage_mode","strategy","target_storage_mode","to_owned","to_owned","to_owned","to_owned","to_owned","to_owned","to_owned","to_owned","to_owned","to_string","total_bet_amount","total_bet_amount","tree_config","try_from","try_from","try_from","try_from","try_from","try_from","try_from","try_from","try_from","try_from","try_from","try_from","try_from","try_from","try_from","try_from","try_into","try_into","try_into","try_into","try_into","try_into","try_into","try_into","try_into","try_into","try_into","try_into","try_into","try_into","turn","turn_bet_sizes","turn_donk_sizes","type_id","type_id","type_id","type_id","type_id","type_id","type_id","type_id","type_id","type_id","type_id","type_id","type_id","type_id","undo","unlock_current_strategy","update_config","weights","with_config"],"q":["postflop_solver","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","",""],"d":["Available actions of the postflop game.","A struct representing an abstract game tree.","Bet size specifying constant addition.","All-in action with a specified amount.","Bet size representing all-in.","Bet action with a specified amount.","Bet size specification.","Bet size candidates for the first bets and raises.","An enum representing the board state.","A configuration for computing the bunching effect.","Call action.","A struct containing the card configuration.","Chance action with a card ID (of range [<code>0</code>, <code>52</code>)).","Check action.","Bet size candidates for the donk bets.","","Fold action.","The trait representing a game.","The trait representing a node in game tree.","Geometric bet size for <code>i32</code> streets with maximum …","Smart pointer like wrapper that is returned when <code>MutexLike</code> …","Mutex-like wrapper, but it actually does not perform any …","Constant representing that the card is not yet dealt.","(Default value)","A struct representing a postflop game.","A struct representing a node in a postflop game tree.","Bet size relative to the current pot size.","Bet size relative to the previous bet size (only valid for …","Raise action with a specified amount.","A struct representing a player’s range.","","A struct containing the game tree configuration.","","Adds a given action to the current node.","Add all-in action if the ratio of maximum bet size to the …","Adds a given line to the action tree.","Obtains the list of added lines.","Obtains the added lines.","Allocates the memory.","Applies the given action history from the root node.","Applies the given history from the root node.","Returns the available actions for the current node.","Returns the available actions for the current node.","Moves back to the root node.","Moves the current node back to the root node.","Bet size candidates for first bet.","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","Computes the normalized weights and caches them.","Obtains the card configuration.","Attempts to read the next card from a char iterator.","Attempts to convert a string into a card.","Attempts to convert a card into a string.","Clears the range.","","","","","","","","","","","","","","","","","","","","","Computes the average with given weights.","Computes the expected values of the current strategy of …","Computes the exploitability of the current strategy.","Computes the expected values of the MES (Maximally …","Obtains the configuration of the game tree.","Returns the current board.","Returns the locking strategy of the current node.","Returns the current player (0 = OOP, 1 = IP).","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","Initial effective stack. Must be greater than <code>0</code>.","","","","","","","","","","","","","","","","","","Returns the equity of each private hand of the given …","Returns the expected values of each private hand of the …","Returns the expected values of each action of each private …","Finalizes the solving process.","Returns the flop.","Flop cards: each card must be unique and in range [<code>0</code>, <code>52</code>).","Bet size candidates of each player for the flop.","Attempts to convert an optionally space-separated string …","","","","","","","","","","","","Returns a reference to the fold ranges.","Force all-in action if the SPR (stack/pot) after the …","Returns the argument unchanged.","Returns the argument unchanged.","Returns the argument unchanged.","Returns the argument unchanged.","Returns the argument unchanged.","Returns the argument unchanged.","Returns the argument unchanged.","Returns the argument unchanged.","Returns the argument unchanged.","Returns the argument unchanged.","Returns the argument unchanged.","Returns the argument unchanged.","Returns the argument unchanged.","Returns the argument unchanged.","Attempts to create a range from a list of hands with their …","Attempts to create a range from raw data.","Attempts to create a range from a sanitized range string.","","Returns a list of all hands in this range and their …","Obtains the weight of a specified hand.","Obtains the average weight of specified offsuit hands.","Obtains the average weight of specified pair hands.","Obtains the average weight of specified suited hands.","Obtains the current action history.","Returns the history of the current node.","Attempts to convert hole cards into a string.","Attempts to convert a list of hole cards into a list of …","","","","","","","","","","","","","","","Initial state of the game (flop, turn, or river).","Calls <code>U::from(self)</code>.","Calls <code>U::from(self)</code>.","Calls <code>U::from(self)</code>.","Calls <code>U::from(self)</code>.","Calls <code>U::from(self)</code>.","Calls <code>U::from(self)</code>.","Calls <code>U::from(self)</code>.","Calls <code>U::from(self)</code>.","Calls <code>U::from(self)</code>.","Calls <code>U::from(self)</code>.","Calls <code>U::from(self)</code>.","Calls <code>U::from(self)</code>.","Calls <code>U::from(self)</code>.","Calls <code>U::from(self)</code>.","Returns a list of all terminal nodes that should not be.","Inverts the range.","Returns whether the current node is a chance node.","Returns whether the current node is a chance node (i.e., …","Returns whether the range is empty.","Returns whether the memory is allocated.","Returns whether the instance is ready to use.","Returns whether the current node is a terminal node.","Returns whether the current node is a terminal node.","Acquires a mutex-like object <strong>without</strong> performing any …","Locks the strategy of the current node.","Returns the estimated memory usage in bytes (uncompressed, …","Returns the estimated additional memory usage in bytes …","Merge bet actions if there are bet actions with “close”…","Creates a new <code>BunchingConfig</code> instance.","Creates a new <code>ActionTree</code> with the specified configuration.","Creates a new empty <code>PostFlopGame</code> (needs <code>update_config()</code> …","Creates a new <code>MutexLike</code> with the given value.","Creates an empty range.","Returns the normalized weights of each private hand of the …","Creates a full range.","","","","Returns the current phase (0-3).","Processes the phase 1.","Manually prepares the phase 1.","Manually proceeds the phase 1 by one percent.","Processes the phase 2.","Manually prepares the phase 2.","Manually proceeds the phase 2 by one percent.","Processes the phase 3.","Manually prepares the phase 3.","Manually proceeds the phase 3 by one percent.","Plays the given action. Returns <code>Ok(())</code> if the action is …","Plays the given action. Playing an action from a terminal …","If the current node is a chance node, returns a list of …","Returns the card list of private hands of the given player.","Processes all phases.","Returns the current progress in percent (0-100).","Bet size candidates for raise.","Rake cap. Must be non-negative.","Rake rate. Must be between <code>0.0</code> and <code>1.0</code>, inclusive.","Initial range of each player.","Obtains the raw data of the range.","Removes a given action from the current node.","Removes the current node.","Removes a given line from the action tree.","Remove lines after building the <code>PostFlopGame</code> but before …","Obtains the list of removed lines.","Obtains the removed lines.","Resets the bunching effect configuration.","River card: must be in range [<code>0</code>, <code>52</code>) or <code>NOT_DEALT</code>.","Bet size candidates of each player for the river.","Donk size candidates for the river (set <code>None</code> to use …","Sets the bunching effect configuration.","Sets the target storage mode.","Sets the weight of a specified hand.","Sets the weights of specified offsuit hands.","Sets the weights of specified pair hands.","Sets the weights of specified suited hands.","Performs Discounted CFR algorithm until the given number …","Proceeds Discounted CFR algorithm for one iteration.","Starting pot size. Must be greater than <code>0</code>.","Returns the storage mode of this instance.","Returns the strategy of the current player.","Returns the target storage mode, which is used for …","","","","","","","","","","","Returns the total bet amount of each player (OOP, IP).","Returns the total bet amount of each player (OOP, IP).","Obtains the tree configuration.","","","","","","","Attempts to convert comma-separated strings into bet sizes.","","Attempts to convert comma-separated strings into bet sizes.","","","","","","","","","","","","","","","","","","","","","","Turn card: must be in range [<code>0</code>, <code>52</code>) or <code>NOT_DEALT</code>.","Bet size candidates of each player for the turn.","Donk size candidates for the turn (set <code>None</code> to use default …","","","","","","","","","","","","","","","Undoes the last action. Returns <code>Ok(())</code> if the action is …","Unlocks the strategy of the current node.","Updates the game configuration. The solved result will be …","Returns the weights of each private hand of the given …","Creates a new <code>PostFlopGame</code> with the specified …"],"i":[0,0,13,2,13,2,0,0,0,0,2,0,2,2,0,9,2,0,0,13,0,0,0,2,0,0,13,13,2,0,9,0,9,1,10,1,1,5,5,1,5,1,5,1,5,11,30,2,9,10,1,11,12,13,14,5,18,24,27,15,2,9,10,11,12,13,14,15,30,2,9,10,1,11,12,13,14,5,18,24,27,15,5,5,0,0,0,15,2,9,10,11,12,13,14,18,15,2,9,10,11,12,13,14,18,15,2,9,0,0,0,0,1,5,5,5,2,9,10,11,12,13,14,5,18,24,15,2,9,10,1,11,12,14,5,18,24,15,30,2,9,10,1,11,12,13,14,5,18,24,27,27,15,30,2,9,10,1,11,12,13,14,5,18,24,27,27,15,12,30,2,9,10,1,11,12,13,14,5,18,24,27,15,10,2,9,10,11,12,13,14,5,18,24,15,2,9,11,12,13,15,5,5,5,0,30,14,10,0,2,9,10,11,12,13,14,18,24,27,15,30,10,30,2,9,10,1,11,12,13,14,5,18,24,27,15,15,15,15,15,15,15,15,15,15,1,5,0,0,30,2,9,10,1,11,12,13,14,5,18,24,27,15,10,30,2,9,10,1,11,12,13,14,5,18,24,27,15,1,15,1,5,15,5,30,1,5,24,5,5,5,10,30,1,5,24,15,5,15,2,9,13,30,30,30,30,30,30,30,30,30,30,1,5,5,5,30,30,11,10,10,14,15,1,1,1,5,1,5,5,14,10,10,5,5,15,15,15,15,0,0,10,5,5,5,2,9,10,11,12,13,14,18,15,15,1,5,5,30,2,9,10,1,11,11,12,12,13,14,5,18,24,27,15,30,2,9,10,1,11,12,13,14,5,18,24,27,15,14,10,10,30,2,9,10,1,11,12,13,14,5,18,24,27,15,1,5,5,5,5],"f":[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,[[1,2],[[4,[3]]]],0,[1,[[4,[3]]]],[1],[5],[[5,6]],[1,[[4,[3]]]],[5],[1],[5,[[7,[2]]]],[1],[5],0,[[]],[[]],[[]],[[]],[[]],[[]],[[]],[[]],[[]],[[]],[[]],[[]],[[]],[[]],[[],[[4,[2,8]]]],[[],[[4,[9,8]]]],[[],[[4,[10,8]]]],[[],[[4,[11,8]]]],[[],[[4,[12,8]]]],[[],[[4,[13,8]]]],[[],[[4,[14,8]]]],[[],[[4,[15,8]]]],[[]],[[]],[[]],[[]],[[]],[[]],[[]],[[]],[[]],[[]],[[]],[[]],[[]],[[]],[5],[5,14],[[],[[4,[16,3]]]],[17,[[4,[16,3]]]],[16,[[4,[3,3]]]],[15],[2,2],[9,9],[10,10],[11,11],[12,12],[13,13],[14,14],[18,18],[15,15],[[]],[[]],[[]],[[]],[[]],[[]],[[]],[[]],[[]],[[2,2],19],[[9,9],19],[[],20],[[]],[[],20],[[]],[1,10],[5,[[7,[16]]]],[5,[[21,[[7,[20]]]]]],[5,22],[[],[[4,[2,8]]]],[[],[[4,[9,8]]]],[[],[[4,[10,8]]]],[[],[[4,[11,8]]]],[[],[[4,[12,8]]]],[[],[[4,[13,8]]]],[[],[[4,[14,8]]]],[[],[[4,[5,8]]]],[[],[[4,[18,8]]]],[[],[[4,[[24,[23]],8]]]],[[],[[4,[15,8]]]],[[],2],[[],9],[[],10],[[],1],[[],11],[[],12],[[],14],[[],5],[[],18],[[],[[24,[[0,[25,26]]]]]],[[],15],[22],[22],[22],[22],[22],[22],[22],[22],[22],[22],[22],[22],[[[27,[25]]]],[22],[22],[22],[22],[22],[22],[22],[22],[22],[22],[22],[22],[22],[22],[[[27,[25]]]],[22],[22],0,[22],[22],[22],[22],[22],[22],[22],[22],[22],[22],[22],[22],[22],[22],0,[2,[[4,[28]]]],[9,[[4,[28]]]],[10,[[4,[28]]]],[11,[[4,[28]]]],[12,[[4,[28]]]],[13,[[4,[28]]]],[14,[[4,[28]]]],[5,[[4,[28]]]],[18,[[4,[28]]]],[[[24,[29]]],[[4,[28]]]],[15,[[4,[28]]]],[[2,2],6],[[9,9],6],[[11,11],6],[[12,12],6],[[13,13],6],[[15,15],6],[[5,22],[[7,[20]]]],[[5,22],[[7,[20]]]],[[5,22],[[7,[20]]]],[[]],[30],0,0,[17,[[4,[3]]]],[[2,31],32],[[9,31],32],[[10,31],32],[[11,31],32],[[12,31],32],[[13,31],32],[[14,31],32],[[18,31],32],[[[24,[[0,[33,25]]]],31],32],[[[27,[[0,[33,25]]]],31],32],[[15,31],32],[30],0,[[]],[[]],[[]],[[]],[[]],[[]],[[]],[[]],[[]],[[]],[[]],[[]],[[]],[[]],[[],[[4,[15,3]]]],[[],[[4,[15,3]]]],[17,[[4,[15,3]]]],[17,[[4,[15]]]],[[15,34]],[[15,16,16],20],[[15,16,16],20],[[15,16],20],[[15,16,16],20],[1],[5],[[],[[4,[3,3]]]],[[],[[4,[[7,[3]],3]]]],[[],22],[[],22],[[],22],[[],22],[[],22],[[],22],[[],22],[[],22],[[],22],[[],22],[[],22],[[],22],[[],22],[[],22],0,[[]],[[]],[[]],[[]],[[]],[[]],[[]],[[]],[[]],[[]],[[]],[[]],[[]],[[]],[1,[[7,[[7,[2]]]]]],[15],[1,6],[5,6],[15,6],[5,[[21,[6]]]],[30,6],[1,6],[5,6],[[[24,[25]]],[[27,[25]]]],[5],[5],[5,34],0,[[],[[4,[30,3]]]],[10,[[4,[1,3]]]],[[],5],[[],24],[[],15],[[5,22]],[[],15],[[2,2],[[21,[19]]]],[[9,9],[[21,[19]]]],[[13,13],[[21,[19]]]],[30,16],[[30,6]],[30],[30],[[30,6]],[30],[30],[[30,6]],[30],[30],[[1,2],[[4,[3]]]],[[5,22]],[5,34],[[5,22]],[[30,6]],[30,16],0,0,0,0,[15],[[1,2],[[4,[3]]]],[1,[[4,[3]]]],[1,[[4,[3]]]],[5,[[4,[3]]]],[1],[5],[5],0,0,0,[[5,30],[[4,[3]]]],[[5,9]],[[15,16,16,20]],[[15,16,16,20]],[[15,16,20]],[[15,16,16,20]],[[35,20,6],20],[35],0,[5,9],[5,[[7,[20]]]],[5,9],[[]],[[]],[[]],[[]],[[]],[[]],[[]],[[]],[[]],[15,3],[1],[5],[5,10],[[],4],[[],4],[[],4],[[],4],[[],4],[[],4],[[],[[4,[11]]]],[[],4],[17,[[4,[12]]]],[[],4],[[],4],[[],4],[[],4],[[],4],[[],4],[[],4],[[],4],[[],4],[[],4],[[],4],[[],4],[[],4],[[],4],[[],4],[[],4],[[],4],[[],4],[[],4],[[],4],[[],4],0,0,0,[[],36],[[],36],[[],36],[[],36],[[],36],[[],36],[[],36],[[],36],[[],36],[[],36],[[],36],[[],36],[[],36],[[],36],[1,[[4,[3]]]],[5],[[5,14,1],[[4,[3]]]],[[5,22]],[[14,1],[[4,[5,3]]]]],"p":[[3,"ActionTree"],[4,"Action"],[3,"String"],[4,"Result"],[3,"PostFlopGame"],[15,"bool"],[3,"Vec"],[4,"DecodeError"],[4,"BoardState"],[3,"TreeConfig"],[3,"BetSizeCandidates"],[3,"DonkSizeCandidates"],[4,"BetSize"],[3,"CardConfig"],[3,"Range"],[15,"u8"],[15,"str"],[3,"PostFlopNode"],[4,"Ordering"],[15,"f32"],[4,"Option"],[15,"usize"],[8,"Decode"],[3,"MutexLike"],[8,"Sized"],[8,"Default"],[3,"MutexGuardLike"],[4,"EncodeError"],[8,"Encode"],[3,"BunchingData"],[3,"Formatter"],[6,"Result"],[8,"Debug"],[15,"u64"],[15,"u32"],[3,"TypeId"]]}\
}');
if (typeof window !== 'undefined' && window.initSearch) {window.initSearch(searchIndex)};
if (typeof exports !== 'undefined') {exports.searchIndex = searchIndex};
